import { photosActions } from '../slices/photos'

export const fetchPhotos = () => async (dispatch: any) => {
  try {
    dispatch(photosActions.request())

    const photos = await fetch(
      'https://jsonplaceholder.typicode.com/photos'
    ).then((res) => res.json())

    dispatch(photosActions.success(photos))
  } catch (err) {
    dispatch(photosActions.failure(err))
  }
}
