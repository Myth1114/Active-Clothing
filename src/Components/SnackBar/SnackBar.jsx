import React from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

export default function SnackBar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  })

  const { vertical, horizontal, open, message, severity } = state

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState })
  }

  const handleClose = () => {
    setState({ ...state, open: false })
  }
  console.log(message)
  //   const buttons = (
  //     <React.Fragment>
  //       <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
  //         Top-Center
  //       </Button>
  //       <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
  //         Top-Right
  //       </Button>
  //       <Button
  //         onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}
  //       >
  //         Bottom-Right
  //       </Button>
  //       <Button
  //         onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}
  //       >
  //         Bottom-Center
  //       </Button>
  //       <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>
  //         Bottom-Left
  //       </Button>
  //       <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>
  //         Top-Left
  //       </Button>
  //     </React.Fragment>
  //   )

  return (
    <div>
      <Button
        onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}
      >
        Click
      </Button>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity={severity}>
          qwerty
        </Alert>
      </Snackbar>
    </div>
  )
}
