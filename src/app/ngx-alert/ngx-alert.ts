import { ngxAlertOpen, ngxAlertClose } from 'src/main';
import { Subject } from 'rxjs';

export interface NgxAlertOutput {
  ngxTitle: string;
  ngxMessage: string;
  ngxType: ngxAlertType;
  ngxOption: NgxAlertOption;
  closeEvent?;
}

export interface NgxAlertOption {
  submitBtn?: boolean;
  closeBtn?: boolean;
  backgroundColor?: string;
  submitBtnColor?: string;
  closeBtnColor?: string;
}

export type ngxAlertType = 'success' | 'error' | 'confirm';

export function ngxAlert(
  ngxTitle: string,
  ngxMessage: string,
  ngxType: ngxAlertType,
  ngxOption?: NgxAlertOption
) {
  ngxAlertOpen.next({
    ngxTitle: ngxTitle,
    ngxMessage: ngxMessage,
    ngxType: ngxType,
    ngxOption: ngxOption
  });

  const result = new Subject<any>();
  ngxAlertClose.subscribe(res => {
    result.next(res);
  });
  return result;
}
