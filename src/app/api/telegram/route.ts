import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, message } = await request.json();
  
    if (!name || !message || message.trim() === '') {
      throw new Error('Name or message text is empty');
    }
  
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHANNEL_CHAT_ID;
    const timestamp = new Date().toLocaleString();
    
    const fullMessage = `
    🚀 *New Message Received* 📩

    👤 *From:* [${name}](tg://user?id=12345)

    📝 *Message:*  
    \`\`\`${message}\`\`\`
    
    ⏰ *Sent at:* \`${timestamp}\`
    
    💡 *Tip:* You can quickly copy the message by clicking the text box below 👇  
    \`\`\`${message}\`\`\`
    
    `;
    
  
    const response = await axios.post(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      chat_id: chatId,
      text: fullMessage,
      parse_mode: "Markdown",
    });
  
    return NextResponse.json({ success: true, status: 200 });
  
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error in /api/telegram: ", error.message);
      return NextResponse.json({ success: false, error: error.message, status: 500 });
    } else {
      console.error("Unknown error: ", error);
      return NextResponse.json({ success: false, error: "Unknown error occurred", status: 500 });
    }
  }
  
  
}
