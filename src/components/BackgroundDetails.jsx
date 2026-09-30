// Decorative vectors stay crisp at phone sizes and never intercept game controls.
export default function BackgroundDetails({ path }) {
  return (
    <svg className="backgroundDetails" viewBox="0 0 600 280" fill="none" aria-hidden="true" focusable="false">
      {["news", "scams", "prompts", "privacy"].includes(path) ? <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="350" y="40" width="130" height="194" rx="18" />
        <path d="M392 54H438M403 219H426M310 253H553" />
        <rect x="180" y="140" width="125" height="95" rx="9" transform="rotate(-12 180 140)" />
        <path d="M201 158L274 143M207 179L270 166M212 201L250 193M502 76H553M527 52V101" />
        {path === "privacy" ? <g><rect x="378" y="120" width="74" height="64" rx="10" /><path d="M391 120V101a24 24 0 0 1 48 0V120M415 145V159" /><circle cx="415" cy="145" r="4" /></g>
          : path === "scams" ? <path d="M415 87L451 103V137Q451 170 415 188Q379 170 379 137V103ZM399 136L411 148L433 121" />
          : path === "news" ? <g><path d="M373 91H456M373 109H416M373 127H416M373 145H400" /><circle cx="430" cy="155" r="24" /><path d="M448 174L465 191" /></g>
          : <g><path d="M374 98H453V151H411L391 171V151H374ZM388 114H438M388 131H423M428 175L434 187L447 193L434 199L428 212L422 199L409 193L422 187Z" /></g>}
      </g> : path === "middle" ? <g stroke="currentColor" strokeWidth="2">
        <path d="M28 230H575M60 230V150H170V230M75 166H155V205H75ZM93 215H139M180 230V208H287V230" />
        <path d="M220 118V160L195 198Q191 208 206 208H267Q279 208 274 198L250 160V118M212 118H258M208 183H261" />
        <circle cx="232" cy="175" r="4" /><circle cx="247" cy="191" r="3" />
        <path d="M342 230V205L376 171M376 171L401 119L425 130L401 180M372 155L398 168M336 204H410M354 229H421" />
        <circle cx="466" cy="77" r="39" /><ellipse cx="466" cy="77" rx="64" ry="18" transform="rotate(-25 466 77)" />
        <circle cx="514" cy="48" r="5" fill="currentColor" /><path d="M100 71H132M116 55V87M310 48H332M321 37V59M542 166H566M554 154V178" />
        <path d="M15 115H45V70H69M287 260V239H320M483 230V172H520V127" strokeDasharray="4 6" />
      </g> : path === "high" ? <g stroke="currentColor" strokeWidth="1.5">
        <path d="M10 152H80L100 118L126 187L155 84L182 207L209 131L230 152H310" strokeWidth="3" />
        <rect x="310" y="38" width="212" height="128" rx="8" /><path d="M325 65H506M326 85H389M326 99H372M326 114H395M326 130H363" />
        <path d="M414 140V118M435 140V96M456 140V110M477 140V81" strokeWidth="9" />
        <path d="M272 201H449V251H272ZM289 217H357M289 232H411M463 203H550M463 220H523M463 237H535" />
        <circle cx="154" cy="71" r="34" strokeDasharray="3 6" /><path d="M56 247L111 219L170 240L232 204M35 41H80M57 19V62" />
        {[56,111,170,232].map((x, index) => <circle key={x} cx={x} cy={[247,219,240,204][index]} r="4" fill="currentColor" />)}
      </g> : <g stroke="currentColor" strokeWidth="1.5">
        <path d="M310 45L485 28L507 219L333 237ZM331 71L462 58M334 86L465 73M337 101L414 93M343 155L474 142M346 170L477 157M349 185L480 172M352 200L443 191" />
        <path d="M391 130L410 110L431 122L454 99" strokeWidth="2" />
        <path d="M92 178Q139 155 183 179Q225 153 269 172V241Q220 225 183 246Q133 225 92 247ZM183 179V246M108 188Q139 180 166 190M108 203Q139 195 166 205M201 190Q230 180 254 184M201 205Q230 195 254 199" />
        <circle cx="220" cy="76" r="32" /><path d="M243 100L273 130M200 76H239M200 87H225M104 60H158M104 71H146M104 82H151" />
        <path d="M528 83V238M518 96H538M518 128H538M518 160H538M518 192H538M518 224H538" />
      </g>}
    </svg>
  );
}
