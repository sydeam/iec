from pathlib import Path
import base64
import logging
import os
import sys
import time

ROOT = Path(r"E:\IEC")
os.environ["DEBUG"] = ""
sys.path.insert(0, str(ROOT / ".tools" / "pychrome"))
import pychrome

logging.getLogger("pychrome").setLevel(logging.ERROR)


browser = pychrome.Browser(url="http://127.0.0.1:9223")
tab = browser.new_tab()
errors = []
tab.Console.messageAdded = lambda message: errors.append(message) if message.get("level") == "error" else None
tab.start()
tab.Network.enable()
tab.Console.enable()
tab.Page.enable()
tab.Emulation.setDeviceMetricsOverride(width=390, height=844, deviceScaleFactor=1, mobile=True)
tab.Emulation.setUserAgentOverride(
    userAgent="Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140 Mobile Safari/537.36"
)
tab.Page.navigate(url="http://127.0.0.1:4173/#/")
time.sleep(3)
metrics = tab.Page.getLayoutMetrics()
overflow = tab.Runtime.evaluate(
    expression="""JSON.stringify([...document.querySelectorAll('*')].map(el => { const r = el.getBoundingClientRect(); return {tag: el.tagName, cls: el.className || '', left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width)}; }).filter(x => x.right > innerWidth + 1 || x.left < -1).slice(0, 30))""",
    returnByValue=True,
)
dimensions = tab.Runtime.evaluate(
    expression="""JSON.stringify({innerWidth, docClientWidth: document.documentElement.clientWidth, docScrollWidth: document.documentElement.scrollWidth, bodyScrollWidth: document.body.scrollWidth, rail: (() => { const e = document.querySelector('.product-rail'); const r=e.getBoundingClientRect(); return {left:r.left,right:r.right,width:r.width,scrollWidth:e.scrollWidth,overflow:getComputedStyle(e).overflowX}; })(), whatsapp: (() => { const r=document.querySelector('.whatsapp-fab').getBoundingClientRect(); return {left:r.left,right:r.right,width:r.width}; })()})""",
    returnByValue=True,
)
result = tab.Page.captureScreenshot(format="png", fromSurface=True, captureBeyondViewport=False)
(ROOT / "mobile-emulated.png").write_bytes(base64.b64decode(result["data"]))
print({
    "cssViewport": metrics.get("cssVisualViewport"),
    "contentSize": metrics.get("cssContentSize"),
    "overflow": overflow.get("result", {}).get("value"),
    "dimensions": dimensions.get("result", {}).get("value"),
    "consoleErrors": errors,
})
try:
    tab.call_method("Browser.close")
except Exception:
    pass
