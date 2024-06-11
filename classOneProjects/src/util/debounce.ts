export const debounce = (func: (arg1: string) => void, wait: number): ((arg1: string) => void) => {
  // Initialize timeout as a variable that can either hold a timeout ID or be null
  let timeout: ReturnType<typeof setTimeout> | null = null

  // Return a new function that will be debounced
  return (arg1: string): void => {
    // If timeout exists, clear it to reset the wait period
    if (timeout) {
      clearTimeout(timeout)
    }

    // Set a new timeout to call the function after the specified wait period
    timeout = setTimeout(() => {
      func(arg1)
    }, wait)
  }
}
