KnightBot!H4sIAAAAAAAAA5VU27KiOBT9l7xqtdwEpOpUDeINFQURvEz1Q4SA0QgYgly6/PcuPH26+2Gm58xb2KTWXnuttfMNJCnO0QLVQPsGMoofkKH2yOoMAQ0MiyhCFHRBCBkEGpAn3HFGHHI/noTcCiRrdZzbgX+YbaeyhabLXWTqJBr1TF96A88uyIoTwcEfAClL8Mk3L7cdGg+8tbPgtnSwtqxFPC+Qe7Wvk+se9i6XYOO8gWeLCDHFSTzOzuiGKCQLVNsQ08/RV8eSynj7aJJalve7ZTPddZqJ6R2DmeucXDRPLvm94TvO7pP0vRItN1VVSmwKLd5TOvOiVvb4Ee0bw4/GVc16DMFmXpbBO/0cxwkKzRAlDLP607oXa/Oun24+zR/T9XSrRJfNMaxHK27qqA9sBwKqdVVtHltv/DniOTHP0n1j8BSRddVTt2R9ZiLNqnmiEmcU+bOpuj65ypVwvxO36UdWrv9Hd1MXbpyu3ziJxmsaLr0Kracz/hzWtivYD+9yx8qJ9EbchPscfefhhcTZT/yHmAQ+v0tL6Fz1yAhWnVlCfUXe6OeqcrN6N/5FH7KC/olllZUD1zrCMpfFsR93Rlvinz1OobA/8swhDpKx4cantDFGaCx0/H2+CWY1vguCkZ3GFhZvYU13DeSzfn+H4IHkLL7Eb6+Jrqg2Q6Dxzy6gKMY5o5DhNGlrstgFMHy4KKCIvdQFJL5MeE6Oq/6GpMvFikwWQyRIVdFn3ENdDSXxNttW66HslW+gCzKaBijPUTjDOUtpbaE8hzHKgfb31y5IUMXefWu7iXwXRJjmzEuKjKQw/DD14ycMgrRImFsngdEeEAUa96uMGMNJnLcyFgmkwRk/kHGGLAdaBEmOfg6IKAqBxmiBfi6tkYat7vOp1Jd2CwF0we3lBw6BBgRRGnA8PxBVTlY04a/8S9nCwiz7kiAGuoC8rvGKNJAUWZAEVZX67cW2/vxJsMULEYOY5EADhm2XZ5Fz0tNeasrDQXd1faHrrWgfA30E4115l0RZWBvHPj+RsbFZcUvLc1OzWQ2Wx6TZmyG9Dhx01XuO9U8gQAOWQG2lcM+uLWNuNQ9nSo9xi/XsIW7Jcr44h4c7olzhn2r+UK/Pl765tqy52yAj5tPR1Nruw3Ih3qutbD96GzUypE0x1N/abiF64AD93sxnHfkwLi8ebDI7bvoHQVEVMnBZ1lEQ6YxYR84X18G8Nytuw+mF2aUL5wULts4gmogwuo488eLsOnzPufcwvEmnK46d98i+Vob8eKrwK02tVe1nhNFr8xPYGvjf1r0TbxPGPbu/Yfx4S/5lH4detpf3QXxD4Qal8XUbGs1kfDesJnKFo8rXM9i3vVmm29wIPJ9fuyAjkEUpvQENwCSkKQ5BF9C0aCNrJlH6h2aGnpvjOJ63kxOYM/3XGmzxDeUM3jKg8YqiCjInS/LzOwYZxYI7BwAA
/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || '',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
