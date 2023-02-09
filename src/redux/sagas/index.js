import { take, put, call, fork, select } from 'redux-saga/effects'

function* fetchPostsApi(reddit) {
  yield true
}


export default function* rootSaga() {
  yield fork(fetchPostsApi)
  console.log("run Saga")

}
