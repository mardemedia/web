class BubbleSvg extends HTMLElement {
  static get observedAttributes() {
    return ["r", "color"];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.style.display = "block";
    this.style.width = "0";
    this.style.height = "0";
    this.style.overflow = "visible";
    this.render();
  }

  static colors = {
    teal: { fill: "rgba(64,194,194,0.45)", shadow: "rgba(64,194,194,0.3)" },
    purple: {
      fill: "rgba(127,119,221,0.45)",
      shadow: "rgba(127,119,221,0.3)",
    },
    coral: { fill: "rgba(216,90,48,0.35)", shadow: "rgba(216,90,48,0.25)" },
    blue: { fill: "rgba(55,138,221,0.45)", shadow: "rgba(55,138,221,0.3)" },
    pink: { fill: "rgba(212,83,126,0.45)", shadow: "rgba(212,83,126,0.3)" },
  };

  render() {
    const r = parseFloat(this.getAttribute("r") ?? 60);
    const color = this.getAttribute("color") ?? "teal";
    const w = r * 2 + 20;
    const h = r * 2 + 20;

    const palette = BubbleSvg.colors[color] ?? BubbleSvg.colors.teal;
    const cx = w / 2,
      cy = h / 2;
    const id = `b${Math.random().toString(36).slice(2, 7)}`;

    const glowRx = r * 0.33,
      glowRy = r * 0.2;
    const glowOx = r * 0.35,
      glowOy = r * 0.35;
    const dotR = r * 0.1;
    const dotOx = r * 0.23,
      dotOy = r * 0.6;
    this.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg"
               width="${w}" height="${h}"
               viewBox="0 0 ${w} ${h}">
            <defs>
              <radialGradient id="bg-${id}" cx="30%" cy="30%" r="70%">
                <stop offset="0%"   stop-color="rgba(255,255,255,0.85)"/>
                <stop offset="100%" stop-color="${palette.fill}"/>
              </radialGradient>
              <filter id="is-${id}" x="-50%" y="-50%" width="200%" height="200%">
                <feOffset dx="-2" dy="-2"/>
                <feGaussianBlur stdDeviation="2" result="ob"/>
                <feComposite operator="out" in="SourceGraphic" in2="ob" result="inv"/>
                <feFlood flood-color="${palette.shadow}" result="col"/>
                <feComposite operator="in"   in="col"   in2="inv"          result="shad"/>
                <feComposite operator="over" in="shad"  in2="SourceGraphic"/>
              </filter>
            </defs>
            <circle  cx="${cx}" cy="${cy}" r="${r}"
                     fill="url(#bg-${id})" filter="url(#is-${id})"/>
            <ellipse cx="${cx - glowOx}" cy="${cy - glowOy}"
                     rx="${glowRx}" ry="${glowRy}"
                     fill="rgba(255,255,255,0.7)"/>
            <circle  cx="${cx - dotOx}"  cy="${cy - dotOy}"
                     r="${dotR}" fill="rgba(255,255,255,0.6)"/>
          </svg>`;
  }
}

customElements.define("bubble-svg", BubbleSvg);
