import { useCallback, useState } from 'react';

const useToast = () => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  const onRead = useCallback((id: string) => {
    setMessages(msgs =>
      msgs.map(msg => ({ ...msg, read: msg.read || id === msg.id })),
    );
  }, []);

  const addMessage = useCallback((message: Omit<IToastMessage, 'id'>) => {
    setMessages(msgs => [...msgs, { ...message, id: msgs.length + 1 }]);
  }, []);

  return { messages, addMessage, onRead };
};

export { useToast };
