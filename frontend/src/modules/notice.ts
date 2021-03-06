import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentType } from './types/commentType';
import {
  GetNoticesType,
  NoticesType,
  AddressType,
  NoticeFetchStatusType,
} from './types/notice';

const initialState: {
  viewNoticeData: GetNoticesType;
  notices: NoticesType;
  comments: CommentType[];
} & NoticeFetchStatusType = {
  viewNoticeData: {
    address: {
      dou: '',
      si: '',
      gu: '',
    },
    closed: false,
    content: '',
    count: 0,
    id: 0,
    image: '',
    meetingTime: '',
    openChat: '',
    regDate: '',
    title: '',
    author: '',
  },
  notices: {},
  noticeFetchStatus: '',
  comments: [],
};

const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {
    setInit: (_state, _action: PayloadAction<void>) => ({
      viewNoticeData: {
        address: {
          dou: '',
          si: '',
          gu: '',
        },
        closed: false,
        content: '',
        count: 0,
        id: 0,
        image: '',
        meetingTime: '',
        openChat: '',
        regDate: '',
        title: '',
        author: '',
      },
      notices: {},
      noticeFetchStatus: '',
      comments: [],
    }),
    setInitViewNoticeData: (state, _action: PayloadAction<void>) => ({
      ...state,
      viewNoticeData: {
        address: {
          dou: '',
          si: '',
          gu: '',
        },
        closed: false,
        content: '',
        count: 0,
        id: 0,
        image: '',
        meetingTime: '',
        openChat: '',
        regDate: '',
        title: '',
        author: '',
      },
    }),
    setAddress: (state, action: PayloadAction<AddressType>) => ({
      ...state,
      viewNoticeData: {
        ...state.viewNoticeData,
        address: {
          dou: action.payload.dou,
          si: action.payload.si,
          gu: action.payload.gu,
        },
      },
    }),
    setContent: (state, action: PayloadAction<string>) => ({
      ...state,
      viewNoticeData: {
        ...state.viewNoticeData,
        content: action.payload,
      },
    }),
    setImage: (state, action: PayloadAction<string>) => ({
      ...state,
      viewNoticeData: {
        ...state.viewNoticeData,
        image: action.payload,
      },
    }),
    setMeetingTime: (state, action: PayloadAction<string>) => ({
      ...state,
      viewNoticeData: {
        ...state.viewNoticeData,
        meetingTime: action.payload,
      },
    }),
    setOpenChat: (state, action: PayloadAction<string>) => ({
      ...state,
      viewNoticeData: {
        ...state.viewNoticeData,
        openChat: action.payload,
      },
    }),
    setTitle: (state, action: PayloadAction<string>) => ({
      ...state,
      viewNoticeData: {
        ...state.viewNoticeData,
        title: action.payload,
      },
    }),
    setOneViewNotice: (state, action: PayloadAction<GetNoticesType>) => ({
      ...state,
      viewNoticeData: {
        address: {
          dou: action.payload.address.dou,
          si: action.payload.address.si,
          gu: action.payload.address.gu,
        },
        closed: action.payload.closed,
        content: action.payload.content,
        count: action.payload.count,
        id: action.payload.id,
        image: action.payload.image,
        meetingTime: action.payload.meetingTime,
        openChat: action.payload.openChat,
        regDate: action.payload.regDate,
        title: action.payload.title,
        author: action.payload.author,
      },
    }),
    setNotices: (state, action: PayloadAction<NoticesType>) => ({
      ...state,
      notices: action.payload,
    }),
    setClosed: (
      state,
      action: PayloadAction<{ closed: boolean; boardId: string; token: string }>
    ) => ({
      ...state,
      viewNoticeData: {
        ...state.viewNoticeData,
        closed: action.payload.closed,
      },
      noticeFetchStatus: 'Fetch',
    }),
    setInitNoticeFetchStatus: (state, _action: PayloadAction<void>) => ({
      ...state,
      noticeFetchStatus: '',
    }),
    setSuccessNoticeFetchStatus: (state, _action: PayloadAction<void>) => ({
      ...state,
      noticeFetchStatus: 'Success',
    }),
    setFailureNoticeFetchStatus: (state, _action: PayloadAction<void>) => ({
      ...state,
      noticeFetchStatus: 'Failure',
    }),
    setComments: (state, action: PayloadAction<CommentType[]>) => ({
      ...state,
      comments: action.payload,
    }),
  },
});

export const noticeActions = noticeSlice.actions;
export default noticeSlice.reducer;
