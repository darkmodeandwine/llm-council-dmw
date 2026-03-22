import './Sidebar.css';

export default function Sidebar({
  conversations,
  currentConversationId,
  onSelectConversation,
  onNewConversation,
}) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <div className="brand-icon">⚖</div>
          LLM Council
        </div>
        <button className="new-conversation-btn" onClick={onNewConversation}>
          + New chat
        </button>
      </div>

      <div className="sidebar-divider" />

      <div className="conversation-list">
        {conversations.length === 0 ? (
          <div className="no-conversations">No conversations yet</div>
        ) : (
          <>
            <div className="conversation-section-label">Recent</div>
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className={`conversation-item ${conv.id === currentConversationId ? 'active' : ''}`}
                onClick={() => onSelectConversation(conv.id)}
              >
                <div className="conversation-title">
                  {conv.title || 'New Conversation'}
                </div>
                <div className="conversation-meta">
                  {conv.message_count} {conv.message_count === 1 ? 'message' : 'messages'}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
