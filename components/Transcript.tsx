"use client";

import { useEffect, useRef } from "react";
import { Mic } from "lucide-react";

interface Message {
  role: string;
  content: string;
}

interface TranscriptProps {
  messages: Message[];
  currentMessage: string;
  currentUserMessage: string;
}

export default function Transcript({
  messages,
  currentMessage,
  currentUserMessage,
}: TranscriptProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, currentMessage, currentUserMessage]);

  const hasMessages =
    messages.length > 0 || currentMessage.trim() || currentUserMessage.trim();

  return (
    <div className="transcript-container flex-1">
      {!hasMessages ? (
        <div className="transcript-empty">
          <Mic className="mb-4 h-12 w-12 text-[#212a3b]/30" />
          <h2 className="transcript-empty-text">No conversation yet</h2>
          <p className="transcript-empty-hint">
            Click the mic button above to start talking
          </p>
        </div>
      ) : (
        <div
          className="transcript-messages flex-1 overflow-y-auto"
          ref={scrollRef}
        >
          {messages.map((msg, idx) => {
            const isUser = msg.role === "user";
            return (
              <div
                key={idx}
                className={`transcript-message ${
                  isUser
                    ? "transcript-message-user"
                    : "transcript-message-assistant"
                }`}
              >
                <div
                  className={`transcript-bubble ${
                    isUser
                      ? "transcript-bubble-user"
                      : "transcript-bubble-assistant"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            );
          })}

          {currentUserMessage && (
            <div className="transcript-message transcript-message-user">
              <div className="transcript-bubble transcript-bubble-user">
                {currentUserMessage}
                <span className="transcript-cursor"></span>
              </div>
            </div>
          )}

          {currentMessage && (
            <div className="transcript-message transcript-message-assistant">
              <div className="transcript-bubble transcript-bubble-assistant">
                {currentMessage}
                <span className="transcript-cursor"></span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
