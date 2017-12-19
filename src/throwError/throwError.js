// @flow

const throwError = (error?: Object | string) => {
  if (error instanceof Error) {
    throw error
  }
  throw new Error(error)
}

export default throwError
