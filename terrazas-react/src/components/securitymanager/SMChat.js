import React from "react";

function SMChat() {
  return (
    <div className="profile-container">
      <style type="text/css">
        {`
      .form-container {
        padding-top: 24px;
        min-height:100vh;
        margin: 0 auto;
        text-align: center;
        padding: 30px;
      }
      .hdng {
        font-size: 30px;
        padding-bottom: 10px;
      }
      input[type="text"],
      input[type="password"] {
        width: 90%;
        padding: 10px;
        margin-bottom: 20px;
        padding-left: 20px;
      }
              `}
      </style>

      <div className="form-container">
        <div>
          <h1 className="hdng">Pending Chat</h1>
        </div>
        <label for="chat1" className="btn">
          Resident 101
        </label>

        <input type="checkbox" id="chat1" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              for="chat1"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full"></div>
                </div>
                <div className="chat-header">
                  Resident 101
                  <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble">Can pizza guy deliver to my door?</div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full"></div>
                </div>
                <div className="chat-header">
                  Security Manager
                  <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble">
                  Yes Mam. Just ask them to share code 101 with the guard.
                </div>
                <div className="chat-footer opacity-50">Seen at 12:46</div>
              </div>

              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered"
              />
              <button className="btn btn-xs">Send</button>
            </div>
          </div>
        </div>

        <label for="chat2" className="btn">
          Resident 234
        </label>

        <input type="checkbox" id="chat2" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              for="chat2"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full"></div>
                </div>
                <div className="chat-header">
                  Resident 234
                  <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble">Can you come check my door handles</div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full"></div>
                </div>
                <div className="chat-header">
                  Security Manager
                  <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble">Noted. Work in progress.</div>
                <div className="chat-footer opacity-50">Seen at 12:46</div>
              </div>

              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered"
              />
              <button className="btn btn-xs">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SMChat;
