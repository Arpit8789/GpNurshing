// Custom hook for modal state management

import { useState, useEffect, useCallback } from 'react';

/**
 * Hook to manage modal open/close state
 * @param {boolean} initialState - Initial modal state
 * @returns {Object} Modal state and handlers
 */
export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        close();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, close]);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};

/**
 * Hook for multiple modals management
 * @returns {Object} Modals state and handlers
 */
export const useMultipleModals = () => {
  const [modals, setModals] = useState({});

  const openModal = useCallback((modalName) => {
    setModals((prev) => ({
      ...prev,
      [modalName]: true,
    }));
  }, []);

  const closeModal = useCallback((modalName) => {
    setModals((prev) => ({
      ...prev,
      [modalName]: false,
    }));
  }, []);

  const toggleModal = useCallback((modalName) => {
    setModals((prev) => ({
      ...prev,
      [modalName]: !prev[modalName],
    }));
  }, []);

  const isModalOpen = useCallback(
    (modalName) => {
      return !!modals[modalName];
    },
    [modals]
  );

  const closeAllModals = useCallback(() => {
    setModals({});
  }, []);

  // Prevent body scroll if any modal is open
  useEffect(() => {
    const anyModalOpen = Object.values(modals).some((isOpen) => isOpen);
    
    if (anyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modals]);

  return {
    modals,
    openModal,
    closeModal,
    toggleModal,
    isModalOpen,
    closeAllModals,
  };
};

/**
 * Hook for modal with data
 * @returns {Object} Modal state with data
 */
export const useModalWithData = () => {
  const [state, setState] = useState({
    isOpen: false,
    data: null,
  });

  const open = useCallback((data = null) => {
    setState({
      isOpen: true,
      data,
    });
  }, []);

  const close = useCallback(() => {
    setState({
      isOpen: false,
      data: null,
    });
  }, []);

  const updateData = useCallback((data) => {
    setState((prev) => ({
      ...prev,
      data,
    }));
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (state.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [state.isOpen]);

  return {
    isOpen: state.isOpen,
    data: state.data,
    open,
    close,
    updateData,
  };
};

/**
 * Hook for confirmation modal
 * @returns {Object} Confirmation modal state and handlers
 */
export const useConfirmModal = () => {
  const [state, setState] = useState({
    isOpen: false,
    message: '',
    onConfirm: null,
    onCancel: null,
  });

  const open = useCallback(({ message, onConfirm, onCancel }) => {
    setState({
      isOpen: true,
      message,
      onConfirm,
      onCancel,
    });
  }, []);

  const close = useCallback(() => {
    setState({
      isOpen: false,
      message: '',
      onConfirm: null,
      onCancel: null,
    });
  }, []);

  const confirm = useCallback(() => {
    if (state.onConfirm) {
      state.onConfirm();
    }
    close();
  }, [state.onConfirm, close]);

  const cancel = useCallback(() => {
    if (state.onCancel) {
      state.onCancel();
    }
    close();
  }, [state.onCancel, close]);

  return {
    isOpen: state.isOpen,
    message: state.message,
    open,
    close,
    confirm,
    cancel,
  };
};

export default useModal;
