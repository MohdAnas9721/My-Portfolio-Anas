export default function ContactSection({
  formData,
  formNote,
  noteColor,
  myEmail,
  onFormChange,
  onSubmit,
  onCopyEmail
}) {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="title">Contact</h2>
        <p className="subtitle">
          If you like my profile, feel free to contact me. I will respond quickly.
        </p>

        <div className="grid contact-grid mt16">
          <div className="card">
            <h3 className="h3">Send a message</h3>
            <form autoComplete="off" onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={onFormChange("name")}
                />
              </div>

              <div className="field">
                <label htmlFor="email">Your Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={onFormChange("email")}
                />
              </div>

              <div className="field">
                <label htmlFor="msg">Message</label>
                <textarea
                  id="msg"
                  placeholder="Write your message..."
                  value={formData.msg}
                  onChange={onFormChange("msg")}
                />
              </div>

              <div className="btn-row">
                <button type="submit" className="btn primary">
                  Send
                </button>
                <button type="button" className="btn" onClick={onCopyEmail}>
                  Copy Email
                </button>
              </div>

              <p className="note" style={noteColor ? { color: noteColor } : undefined}>
                {formNote}
              </p>
            </form>
          </div>

          <div className="card">
            <h3 className="h3">Direct Links</h3>

            <div className="list mt10">
              <div className="card subcard">
                <div className="subcard-title">Email</div>
                <div className="muted mt6">
                  <a className="accent" href={`mailto:${myEmail}`}>
                    {myEmail}
                  </a>
                </div>
              </div>

              <div className="card subcard">
                <div className="subcard-title">LinkedIn</div>
                <div className="muted mt6">
                  <a
                    className="accent"
                    target="_blank"
                    rel="noopener"
                    href="https://www.linkedin.com/in/mohd-anas-740866244/"
                  >
                    Open Profile
                  </a>
                </div>
              </div>

              <div className="card subcard">
                <div className="subcard-title">GitHub</div>
                <div className="muted mt6">
                  <a
                    className="accent"
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/MohdAnas9721"
                  >
                    Open Repositories
                  </a>
                </div>
              </div>

              <div className="card subcard">
                <div className="subcard-title">Resume</div>
                <div className="muted mt6">
                  <span className="muted">Add your resume PDF link here later.</span>
                </div>
              </div>
            </div>

            <p className="note">
              Next step: connect this frontend to backend APIs (projects + contact form)
              so it becomes stronger.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

