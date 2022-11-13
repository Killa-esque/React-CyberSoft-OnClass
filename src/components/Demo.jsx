//rfc: react function component
import React from 'react'

export default function Demo() {
    //Lệnh return sẽ chứa giao diện component
    // Lưu ý: Nội dung của component phải được bao phủ bởi 1 thẻ
    // <> </>: Thẻ fragment thẻ vô hình
  return (

    <React.Fragment>
        <button className='btn btn-primary'>Button</button>
        <button className='btn btn-success'>Button</button>
    </React.Fragment>
  )
}
