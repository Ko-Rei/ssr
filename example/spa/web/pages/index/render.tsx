import React, { useContext } from 'react'
import { IWindow } from 'ssr-types'
import Slider from '@/components/slider'
import Rectangle from '@/components/rectangle'

export default props => {
  const foo = useContext((window as IWindow).STORE_CONTEXT)
  return (
    <div>
      {
        props.data && props.data[0].components ? <div>
          <Slider {...props} data={props.data[0].components} />
          <Rectangle {...props} data={props.data[1].components} />
        </div> : <img src='https://gw.alicdn.com/tfs/TB1v.zIE7T2gK0jSZPcXXcKkpXa-128-128.gif' className='loading' />
      }
    </div>
  )
}
