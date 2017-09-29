import * as APIUtil from '../util/top_picks_util';

export const RECEIVE_TOP_PICKS = "RECEIVE_TOP_PICKS";

export const fetchTopPicks = () => dispatch => (
  APIUtil.fetchTopPicks().then(res => (
    dispatch(receiveTopPicks(res))
  ))
)

export const receiveTopPicks = (topPicks) => ({
  action: RECEIVE_TOP_PICKS,
  topPicks
})
