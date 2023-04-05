import React from "react";

function Footer() {
  const menuSections = [
    {
      title: "Community",
      links: [
        { label: "Twitter", url: "/" },
        { label: "Telegram", url: "/" },
        { label: "Telegram CN", url: "/" },
        { label: "Dodo", url: "/" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "Discord", url: "/" },
        { label: "YouTube", url: "/" },
        { label: "Dune Analytics", url: "/" },
        { label: "Llama Airforce", url: "/" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Whitepaper", url: "/" },
        { label: "Audits", url: "/" },
        { label: "Events", url: "/" },
        { label: "Contracts", url: "/" },
      ],
    },
    {
      title: "Market",
      links: [
        { label: "Bug Bounty", url: "/" },
        { label: "FAQ", url: "/" },
        { label: "Integrations", url: "/" },
        { label: "Donate", url: "/" },
      ],
    },
    {
      title: "Develop",
      links: [
        { label: "Developer Docs", url: "/" },
        { label: "News", url: "/" },
        { label: "Resources", url: "/" },
        { label: "Github", url: "/" },
      ],
    },
  ];
  return (
    <>
      <div className="footer_wrapper">
        <div className="container">
          <div className="footer_widget">
            <div className="logo_area">
              <img
                src="https://swap-curve.netlify.app/static/media/footer.605161f0e72fb14149b4.png"
                alt="logo"
              />
            </div>
            <div className="content_area">
              {menuSections.map((section) => (
                <div className="footer_menu" key={section.title}>
                  <div className="title">
                    <h2>{section.title}</h2>
                  </div>
                  <ul>
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.url}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
