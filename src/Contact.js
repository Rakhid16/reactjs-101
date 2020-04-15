import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2><br/>
        <img className="gambar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/600px-Telegram_logo.svg.png" />
        <a target="blank" href="https://t.me/rakhmanWahid">Telegram</a><br/>
        <img className="gambar" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" />
        <a target="blank" href="https://linkedin.com/in/rakhid16">linkedIn</a><br/>
        <img className="gambar" src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" />
        <a target="blank" href="https://github.com/rakhid16">Github</a><br/>
      </div>
    );
  }
}

export default Contact;