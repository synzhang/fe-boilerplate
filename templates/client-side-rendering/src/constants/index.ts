export const sortType: { [key: string]: string } = {
  ascend: 'asc',
  descend: 'desc',
};

export const enum REQUEST_STATUS {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR,
}

export const enum STORAGE_KEY {
  AUTHORIZATION = 'authorization',
}
