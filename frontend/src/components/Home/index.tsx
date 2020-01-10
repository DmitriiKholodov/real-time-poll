import React from 'react';
import './index.scss';

const Home = (): JSX.Element => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero__title">Make your own real-time poll</div>
        <div className="hero__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet asperiores autem consequatur
          cupiditate, dignissimos dolor dolorem dolorum ducimus eaque earum eius, eveniet ex facilis hic in iste iure
          nam necessitatibus nemo nesciunt nihil non nulla officia perferendis quisquam quo repellat repellendus
          reprehenderit repudiandae saepe sequi soluta tempora tempore, veniam voluptas voluptatibus?
        </div>
        <div className="hero__pic">
          <svg
            id="_x33_0"
            // enable-background="new 0 0 64 64"
            height="100"
            viewBox="0 0 64 64"
            width="100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <g>
                <g>
                  <path d="m62 30v32h-14v-20-12z" fill="#ffeaa7" />
                </g>
                <g>
                  <path d="m48 42v20h-14v-10-10z" fill="#ffeaa7" />
                </g>
                <g>
                  <path
                    d="m34 52v10h-13.5c.83 0 1.5-.67 1.5-1.5 0-1.24-.5-2.37-1.32-3.18-.21-.21-.44-.4-.68-.56v-4.76z"
                    fill="#ffeaa7"
                  />
                </g>
                <g>
                  <path d="m40 17-10 7v-4h-14l-.74-3.7c.79-.54 1.37-1.35 1.61-2.3h13.13v-4z" fill="#ccd1d9" />
                </g>
                <g>
                  <path
                    d="m17 11.69c0-.97-.71-1.81-1.67-1.97l-3.01-.5c-.54-.09-.98-.45-1.28-1.24h-.01l-.92.47c-.68.34-1.11 1.03-1.11 1.79v2.76c0 .35.04.68.13 1l-3.33-2.4c-.5-.38-.8-.97-.8-1.6 0-2.21.9-4.21 2.34-5.66 1.45-1.44 3.45-2.34 5.66-2.34s4.21.9 5.66 2.34c1.44 1.45 2.34 3.45 2.34 5.66 0 .63-.3 1.22-.8 1.6l-3.33 2.4c.09-.32.13-.65.13-1z"
                    fill="#b27946"
                  />
                </g>
                <g>
                  <path
                    d="m20 43v9 4.76c-.72-.48-1.58-.76-2.5-.76-1.24 0-2.37.5-3.18 1.32-.82.81-1.32 1.94-1.32 3.18v-19.5h7z"
                    fill="#969faa"
                  />
                </g>
                <g>
                  <path
                    d="m13 41v19.5c0-1.24-.5-2.37-1.32-3.18-.81-.82-1.94-1.32-3.18-1.32-.92 0-1.78.28-2.5.76v-13.76-2z"
                    fill="#969faa"
                  />
                </g>
                <g>
                  <path
                    d="m11.68 57.32c.82.81 1.32 1.94 1.32 3.18 0 .83-.67 1.5-1.5 1.5h-6c-.83 0-1.5-.67-1.5-1.5 0-1.24.5-2.37 1.32-3.18.21-.21.44-.4.68-.56.72-.48 1.58-.76 2.5-.76 1.24 0 2.37.5 3.18 1.32z"
                    fill="#cf9e76"
                  />
                </g>
                <g>
                  <path
                    d="m20.68 57.32c.82.81 1.32 1.94 1.32 3.18 0 .83-.67 1.5-1.5 1.5h-6c-.83 0-1.5-.67-1.5-1.5 0-1.24.5-2.37 1.32-3.18.81-.82 1.94-1.32 3.18-1.32.92 0 1.78.28 2.5.76.24.16.47.35.68.56z"
                    fill="#cf9e76"
                  />
                </g>
                <g>
                  <path
                    d="m20.21 21.05c2.23.56 3.79 2.56 3.79 4.85v13.1h-4v2h-7-7v-2h-4v-13.1c0-2.29 1.56-4.29 3.79-4.85l2.31-.57.9 4.52 1.82-1.36 1.18 2.36-2 7 3 4 3-4-2-7 1.18-2.36 1.82 1.36.9-4.52z"
                    fill="#b4dd7f"
                  />
                </g>
                <g>
                  <path d="m14 26 2 7-3 4-3-4 2-7z" fill="#fcd770" />
                </g>
                <g>
                  <path d="m15.18 23.64-1.18 2.36h-2l-1.18-2.36 2.18-1.64z" fill="#fcd770" />
                </g>
                <g>
                  <path d="m13 22-2.18 1.64-1.82 1.36-.9-4.52 1.9-.48z" fill="#a0d468" />
                </g>
                <g>
                  <path d="m16 20 1.9.48-.9 4.52-1.82-1.36-2.18-1.64z" fill="#a0d468" />
                </g>
                <g>
                  <path d="m6 41v2h-1c-1.66 0-3-1.34-3-3v-1h4z" fill="#f0d0b4" />
                </g>
                <g>
                  <path d="m24 40c0 1.66-1.34 3-3 3h-1v-2-2h4z" fill="#f0d0b4" />
                </g>
                <g>
                  <path d="m15.26 16.3.74 3.7-3 2-3-2 .74-3.7c.65.44 1.42.7 2.26.7s1.61-.26 2.26-.7z" fill="#f0d0b4" />
                </g>
                <g>
                  <path
                    d="m15.33 9.72c.96.16 1.67 1 1.67 1.97v1.31c0 .35-.04.68-.13 1-.24.95-.82 1.76-1.61 2.3-.65.44-1.42.7-2.26.7s-1.61-.26-2.26-.7c-.2-.14-.39-.3-.57-.47-.49-.5-.86-1.13-1.04-1.83-.09-.32-.13-.65-.13-1v-2.76c0-.76.43-1.45 1.11-1.79l.92-.47h.01c.3.79.74 1.15 1.28 1.24z"
                    fill="#f0d0b4"
                  />
                </g>
                <g>
                  <path
                    d="m60 15-4.33 3.65 1.66 5.35-4.33-3.3-4.33 3.3 1.66-5.35-4.33-3.65h5.35l1.65-5 1.65 5z"
                    fill="#fcd770"
                  />
                </g>
              </g>
              <g>
                <path d="m46.795 26.693 6.205-4.739 6.205 4.739-2.381-7.704 5.91-4.989h-7.359l-2.375-7.187-2.375 7.187h-7.359l5.91 4.989zm1.939-10.693h3.336l.93-2.813.93 2.813h3.336l-2.742 2.315.924 2.991-2.448-1.869-2.447 1.87.924-2.991z" />
                <path d="m47 29v12h-14v10h-12v-7c2.206 0 4-1.794 4-4v-14.096c0-2.005-.995-3.807-2.561-4.904h6.561v4.921l12.744-8.921-12.744-8.921v4.921h-9.032l.832-.601c.752-.562 1.2-1.46 1.2-2.399 0-4.963-4.037-9-9-9s-9 4.037-9 9c0 .939.448 1.837 1.215 2.41l3.082 2.224c.277.793.739 1.492 1.347 2.046l-.501 2.503-3.598.899c-2.676.67-4.545 3.064-4.545 5.822v14.096c0 2.206 1.794 4 4 4v12.261c-1.221 1.01-2 2.535-2 4.239 0 1.379 1.121 2.5 2.5 2.5h6c.565 0 1.081-.195 1.5-.512.419.317.935.512 1.5.512h48.5v-34zm-29.5 26c-1.328 0-2.548.474-3.5 1.261v-14.261h5v13.213c-.478-.135-.979-.213-1.5-.213zm3.5-13v-2h2c0 1.103-.897 2-2 2zm-11.188-20.923 1.457.971-1.6 1.2-.407-2.034zm2.942 5.923h.492l1.656 5.797-1.902 2.536-1.902-2.536zm.628-2h-.764l-.532-1.065.914-.685.914.686zm1.349-2.952 1.457-.971.549.137-.407 2.034zm-4.731-9.048v-2.764c0-.382.212-.725.553-.895l.048-.024c.384.46.929.785 1.561.89l3.004.501c.482.08.834.495.834.986v1.306c0 1.654-1.346 3-3 3s-3-1.346-3-3zm21 2v-3.079l7.256 5.079-7.256 5.079v-3.079h-14.18l-.464-2.319c.514-.469.937-1.035 1.221-1.681zm-25-5c0-3.859 3.141-7 7-7s7 3.141 7 7c0 .313-.149.612-.385.789l-1.615 1.166v-.26c0-1.474-1.055-2.718-2.507-2.959l-3.004-.501c-.283-.047-.489-.291-.489-.578 0-.156.062-.304.172-.415l.535-.535-1.414-1.414-.535.535c-.422.421-.68.962-.742 1.547l-.358.178c-1.022.511-1.658 1.54-1.658 2.683v1.719l-1.601-1.155c-.25-.188-.399-.487-.399-.8zm7 8c.536 0 1.043-.107 1.527-.264l.361 1.803-1.888 1.259-1.888-1.259.361-1.803c.484.157.991.264 1.527.264zm-6.971 4.022 1.291-.322 1.01 5.052 2.129-1.597.472.945-2.029 7.104 4.098 5.463 4.098-5.464-2.03-7.103.472-.945 2.129 1.597 1.01-5.052 1.291.323c1.784.446 3.03 2.042 3.03 3.881v12.096h-2v-10h-2v12h-12v-12h-2v10h-2v-12.096c0-1.839 1.246-3.435 3.029-3.882zm-3.029 17.978h2v2c-1.103 0-2-.897-2-2zm4 2h5v14.261c-.952-.787-2.172-1.261-3.5-1.261-.521 0-1.022.078-1.5.213zm4.5 19h-6c-.275 0-.5-.225-.5-.5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .275-.225.5-.5.5zm9 0h-6c-.275 0-.5-.225-.5-.5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .275-.225.5-.5.5zm.5-4.739v-3.261h12v8h-10.05c.032-.162.05-.329.05-.5 0-1.704-.779-3.229-2-4.239zm14 4.739v-18h12v18zm26 0h-12v-30h12z" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="buttons-row">
        <button className="btn btn-primary">JOIN</button>
        <button className="btn btn-secondary">CREATE</button>
      </div>
    </div>
  );
};

export default Home;
