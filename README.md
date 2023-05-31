# СТРАХОВОЙ БРОКЕР

* ext - расширение для браузера
* form - то что заполняет брокер руками
* target - пример целевой формы


---

Чтобы в расширение подгрузить ресурсы из интернета

```json
"web_accessible_resources": [
    {
        "resources": [
            "styles.css"
        ],
        "matches": ["https://localhost/extension"]
    }
],
```