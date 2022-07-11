import { useCallback, useState } from 'react';

export const useToggle = (state = false) => {
  const [open, setOpen] = useState(state);
  const [openCalen, setOpenCalen] = useState(state);

  const handleOpen = useCallback(() => { setOpen(true) }, [])
  const handleClose = useCallback(() => { setOpen(false) }, [])
  const handleToggle = useCallback(() => { setOpen(!open) }, [open])
  const handleToggleCalen = useCallback(() => { setOpenCalen(!openCalen) }, [openCalen])

  return { open, openCalen, handleOpen, handleToggle, handleClose, handleToggleCalen }
} 