

import { takeLatest, call, put } from 'redux-saga/effects';

import { importExcelSuccess, importExcelFalse, importExcelWarning, updateImportProccess, mergeData } from './actions';
import request from '../../utils/request';
import { IMPORT_EXCEL } from './constants';
import { API_IMPORT, API_IMPORT_FIELD, API_IMPORT_ALTERNATIVE, API_ORIGANIZATION, API_STOCK, API_SAMPLE_PROCESS } from '../../config/urlConfig';
import * as API from 'config/urlConfig';
import { changeSnackbar } from '../Dashboard/actions';
import { delSpace } from 'utils/common';
import { removeVietnameseTones, convertToSlug } from 'utils/common';
import { clientId } from '../../variable';
import { serialize } from '../../helper';
import lodash from 'lodash';

function* getSpecialOfferSaga(action) {
    console.log("hahc")
//   const token = localStorage.getItem('token');
//   try {
//     const res = yield call(request, `${API.API_SALE_POLICY_CTUD}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//       method: 'GET',
//     });
//     if (res) return res.data;
//   } catch (error) { }
//   return [];
}

// Individual exports for testing
export default function* importPageSaga() {
  yield takeLatest(IMPORT_EXCEL, getSpecialOfferSaga);
}
