# СТРАХОВОЙ БРОКЕР

* ext - расширение для браузера
* form - то что заполняет брокер руками
* target - пример целевой формы

---


```json
"web_accessible_resources": [
    {
        "resources": [
            "styles.css"
        ],
        "matches": ["https://localhost/extension"]
    }
],
"background": {
    "service_worker": "worker.js"
}
```

