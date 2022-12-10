import { useRef } from 'react'

const RefDom = () => {
  const inputRef = useRef()
  console.log('🚀 ~ inputRef', inputRef)
  return (
    <div>
      <input ref={inputRef} type='text' />
    </div>
  )
}

export default RefDom
