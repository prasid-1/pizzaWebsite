<script lang="ts">
  import { onMount, tick } from "svelte";
  import emailjs from "@emailjs/browser";
  let toggleButton = true;
  //const API_USERNAME = import.meta.env.VITE_API_USERNAME;
  //const API_PASSWORD = import.meta.env.VITE_API_PASSWORD;

  let isChatOpen = false;
  let chatMessage = "";
  let chatMessages = [
    {
      type: "bot",
      text: "Plz ask your quesion with your email, we will get back to you as soon as possible.",
    },
  ];

  let sending = false;
  function toggleOn() {
    toggleButton = true;
  }
  function toggleOff() {
    toggleButton = false;
  }

  function toggleChat() {
    isChatOpen = !isChatOpen;

    if (isChatOpen) autoScroll("instant");
  }

  async function sendMessage() {
    if (chatMessage.trim() === "" || sending) {
      return;
    }
    const userEmail = prompt("Please enter your email address:");

    if (!userEmail || !userEmail.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    sending = true;
    autoScroll();

    chatMessages = [...chatMessages, { type: "user", text: chatMessage }];
    const userInput = chatMessage;
    chatMessage = "";
    autoScroll();

    // Send email with user's message
    try {
      await emailjs.send(
        "service_p0ff69p", // Your EmailJS service ID
        "template_7fbx1xu", // Replace with your correct template ID (template_xxxxxxx)
        {
          from_name: "Pizza Website Chat",
          to_name: "Pizza Restaurant",
          message: userInput,
          timestamp: new Date().toLocaleString(),
          source: "Biggdady's Pizza Website",
          user_email: userEmail,
        },
        "5U08bY4sfgT0GPsuq" // Your EmailJS public key
      );
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Failed to send email:", error);
      // Still show success message to user even if email fails
    }

    // Simple automated response asking for email
    await new Promise((resolve) => setTimeout(resolve, 1000));

    chatMessages = [
      ...chatMessages,
      {
        type: "bot",
        text: "Thank you for your message! we will get back to you as soon as possible.",
      },
    ];

    autoScroll();
    sending = false;
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === "Enter") {
      if (event.shiftKey) {
        return;
      } else {
        // If Enter without Shift, send the message
        event.preventDefault(); // Prevent default Enter behavior
        sendMessage();
      }
    }
  }

  async function autoScroll(
    behavior: "smooth" | "auto" | "instant" = "smooth"
  ) {
    await tick();
    const chatContainer = document.querySelector(
      ".chat-messages"
    ) as HTMLElement;
    console.log(behavior);
    if (!chatContainer) return;
    chatContainer.scrollTo({
      top: chatContainer.scrollHeight,
      behavior,
    });
  }
</script>

<!-- Chat Interface -->
{#if isChatOpen}
  <div class="chat-container">
    <div class="chat-header">
      <h3>Biggdady's Pizza</h3>
      <button class="close-chat" on:click={toggleChat}>×</button>
    </div>

    <div class="chat-messages">
      {#each chatMessages as message}
        <div class="message {message.type}">
          <!-- {#if message.type === "bot"}
            <div class="bot-avatar"></div>
          {/if} -->
          <div class="message-bubble">
            {message.text}
          </div>
        </div>
      {/each}
    </div>

    <div class="chat-input">
      <textarea
        bind:value={chatMessage}
        placeholder="Type your message..."
        on:keypress={handleKeyPress}
        rows="1"
      ></textarea>

      <button on:click={sendMessage}>Send</button>
    </div>
  </div>
{/if}

<!-- Floating Chat Button -->
<button class="chat-fab" on:click={toggleChat}>
  {#if isChatOpen}
    ×
  {:else}
    💬
  {/if}
</button>

<style>
  /* Chat Interface Styles */
  .chat-fab {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ff5722;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(255, 0, 0, 0.3);
    z-index: 1001;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chat-fab:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(255, 0, 0, 0.5);
  }

  .chat-container {
    position: fixed;
    bottom: 100px;
    right: 20px;
    width: 350px;
    height: 500px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    z-index: 1002;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .chat-header {
    background-color: #ff5722;
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .chat-header h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
  }

  .close-chat {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    padding: 0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.2s;
  }

  .close-chat:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .chat-messages {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .chat-messages::-webkit-scrollbar {
    width: 5px;
  }

  .chat-messages::-webkit-scrollbar-track {
    background: #f1f1f1; /* Light gray track */
    border-radius: 10px;
  }

  .chat-messages::-webkit-scrollbar-thumb:hover {
    background: rgb(186, 173, 173); /* Darker on hover */
    border-radius: 10px;
  }
  .message {
    display: flex;
    align-items: flex-end;
    gap: 8px;
  }

  .message.user {
    justify-content: flex-end;
    text-align: left;
  }

  .message.bot {
    justify-content: flex-start;
    text-align: left;
  }

  .message-bubble {
    max-width: 80%;
    padding: 0.75rem 1rem;
    border-radius: 18px;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .message.user .message-bubble {
    background: #f69c70;
    color: black;
  }

  .message.bot .message-bubble {
    background: #f1f1f1;
    color: black;
  }

  .chat-input {
    padding: 1rem;
    border-top: 1px solid #eee;
    display: flex;
    gap: 0.5rem;
    background-color: w;
  }

  .chat-input textarea {
    flex: 1;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 20px;
    outline: none;
    font-size: 0.9rem;
    font-family: inherit;
    resize: none;
    min-height: 20px;
    max-height: 100px;
    overflow-y: auto;
  }

  .chat-input textarea::-webkit-scrollbar {
    display: none;
  }

  .chat-input button {
    padding: 0.75rem 1.5rem;
    background: whitesmoke;
    color: black;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.2s;
  }

  .chat-input button:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(19, 20, 26, 0.3);
  }

  /* Mobile Responsive for Chat */
  @media screen and (max-width: 768px) {
    .chat-container {
      width: calc(100vw - 40px);
      height: 70vh;
      bottom: 80px;
      right: 20px;
      left: 20px;
    }

    .chat-fab {
      width: 50px;
      height: 50px;
      font-size: 20px;
    }
  }
  /* Toggle Buttons */
  .toggle-buttons {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    border-top: 1px solid #eee;
    background: #fafafa;
  }
  .chat-but {
    background: none;
    border: none;
    color: #333;
    font-size: 1rem;
    cursor: pointer;
  }

  .chat-but:active,
  .chat-but:focus {
    outline: none;
    color: #ff5722;
    font-weight: 600;
    text-decoration: underline;
  }
  .chat-but.selected {
    color: #ff5722;
    font-weight: 600;
    text-decoration: underline;
  }
</style>
