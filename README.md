# NgxAlert

NgxAlert

## 安裝

```bash
npm install pf-ngx-alert
```

## 引用

`app.module.ts`
```typescript
...something...
import { NgxAlertModule } from 'pf-ngx-alert';

@NgModule({
  ...something...
  imports: [...something..., NgxAlertModule],
  ...something...
})
export class AppModule {}
```
`app.component.html`
```html
<ngx-alert></ngx-alert>
```

## 快速上手

```bash
ng g c Test
```

`test.component.html`
```html
<button (click)="alert()">ALERT</button>
```

`test.component.ts`
```typescript
import { ngxAlert } from 'pf-ngx-alert';

export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  alert() {
    ngxAlert(
      'Title', /* Title */
      'Message', /* Message */
      'success' /* Type */
    ).then(result => {
      /* Do something... */
    });
  }
}
```
## Required
-------------

| Argument          | Required                                 | Default value    | Type      | Description                     |
| ----------------- | ---------------------------------------- | ---------------- | --------- | ------------------------------- |
| `ngxTitle`        | yes                                      | none             | string    | 標題 |
| `ngxMessage`      | yes                                      | none             | string    | 內容 |
| `ngxType`         | yes (`success`、`error`、`confirm`)      | none            | string    | 類型 |

## Option
-------------

| Argument                 | Required | Default value      | Type      | Description                     |
| ------------------------ | -------- | ------------------ | --------- | ------------------------------- |
| `backgroundColor`        | no       | `#fffdeb`          | string    | 背景色                           |
| `submitBtnColor`         | no       | `#005dbd`          | string    | 確認按鈕顏色                      |
| `closeBtnColor`          | no       | `#ffffff`          | string    | 取消按鈕顏色                      |
