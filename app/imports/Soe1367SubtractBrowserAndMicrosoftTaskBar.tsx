import svgPaths from "./svg-jz71dlr7cb";

function RadioButtonChecked() {
  return (
    <div className="relative shrink-0 size-5" data-name="radio_button_checked">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="radio_button_checked">
          <g id="Vector">
            <path d={svgPaths.p34103500} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3244d180} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ExpandMore() {
  return (
    <div className="relative shrink-0 size-5" data-name="expand_more">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="expand_more">
          <path
            d={svgPaths.p1c0f0600}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame11495() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-sm shrink-0">
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-sm" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative w-full">
          <RadioButtonChecked />
          <div className="basis-0 css-yqdygo font-['Chalkboard:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[16px] text-left">
            <p className="block leading-[normal]">Multiple choice</p>
          </div>
          <ExpandMore />
        </div>
      </div>
    </div>
  );
}

function Frame11498() {
  return (
    <div className="h-full relative shrink-0 w-[584px]">
      <div className="box-border content-stretch flex flex-row h-full items-start justify-start p-0 relative w-[584px]">
        <Frame11495 />
      </div>
    </div>
  );
}

function Toggle() {
  return (
    <div className="h-4 relative shrink-0 w-8" data-name="Toggle">
      <div className="absolute bottom-[-75%] left-[-31.249%] right-0 top-[-50%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 42 36"
        >
          <g id="Toggle">
            <rect
              fill="var(--fill-0, #A9ABB4)"
              height="10.6667"
              id="Rectangle 1"
              rx="5.33333"
              width="32"
              x="10"
              y="10.6667"
            />
            <g filter="url(#filter0_d_2_350)" id="Ellipse 1">
              <circle cx="18.0002" cy="16" fill="var(--fill-0, white)" r="8" />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="36"
              id="filter0_d_2_350"
              width="36"
              x="0.000205994"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.156863 0 0 0 0 0.180392 0 0 0 0 0.270588 0 0 0 0.2 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_2_350"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_2_350"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame11507() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Toggle />
        <div className="css-yqdygo font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">Required</p>
        </div>
      </div>
    </div>
  );
}

function Frame11506() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative w-full">
        <Frame11498 />
        <Frame11507 />
      </div>
    </div>
  );
}

function TextBold() {
  return (
    <div className="relative shrink-0 size-4" data-name="Text/Bold">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Text/Bold">
          <path
            clipRule="evenodd"
            d={svgPaths.p21521f40}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0" data-name="Icon">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative">
        <TextBold />
      </div>
    </div>
  );
}

function ControlItem() {
  return (
    <div className="bg-[#ffffff] relative shrink-0" data-name="Control Item">
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function TextItalic() {
  return (
    <div className="relative shrink-0 size-4" data-name="Text/Italic">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Text/Italic">
          <path
            clipRule="evenodd"
            d={svgPaths.pa9a3d00}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0" data-name="Icon">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative">
        <TextItalic />
      </div>
    </div>
  );
}

function ControlItem1() {
  return (
    <div className="bg-[#ffffff] relative shrink-0" data-name="Control Item">
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function TextStrikethrough() {
  return (
    <div className="relative shrink-0 size-4" data-name="Text/Strikethrough">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Text/Strikethrough">
          <path
            clipRule="evenodd"
            d={svgPaths.p1244fe00}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0" data-name="Icon">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative">
        <TextStrikethrough />
      </div>
    </div>
  );
}

function ControlItem2() {
  return (
    <div className="bg-[#ffffff] relative shrink-0" data-name="Control Item">
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function TextUnderline() {
  return (
    <div className="relative shrink-0 size-4" data-name="Text/Underline">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Text/Underline">
          <path
            clipRule="evenodd"
            d={svgPaths.p3888e100}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0" data-name="Icon">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative">
        <TextUnderline />
      </div>
    </div>
  );
}

function ControlItem3() {
  return (
    <div className="bg-[#ffffff] relative shrink-0" data-name="Control Item">
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function SystemUserCircle() {
  return (
    <div className="relative shrink-0 size-4" data-name="System/User Circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="System/User Circle">
          <path
            clipRule="evenodd"
            d={svgPaths.p2f4ad300}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0" data-name="Icon">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative">
        <SystemUserCircle />
      </div>
    </div>
  );
}

function ControlItem4() {
  return (
    <div className="bg-[#ffffff] relative shrink-0" data-name="Control Item">
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function TextClearFormatting() {
  return (
    <div className="relative shrink-0 size-4" data-name="Text/Clear Formatting">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Text/Clear Formatting">
          <path
            clipRule="evenodd"
            d={svgPaths.p2d8f2f40}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0" data-name="Icon">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative">
        <TextClearFormatting />
      </div>
    </div>
  );
}

function ControlItem5() {
  return (
    <div className="bg-[#ffffff] relative shrink-0" data-name="Control Item">
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative">
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function ArrowsBackUp() {
  return (
    <div className="relative shrink-0 size-4" data-name="Arrows/Back Up">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Arrows/Back Up">
          <path
            clipRule="evenodd"
            d={svgPaths.pdb44600}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0" data-name="Icon">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative">
        <ArrowsBackUp />
      </div>
    </div>
  );
}

function ControlItem6() {
  return (
    <div className="bg-[#ffffff] relative shrink-0" data-name="Control Item">
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function ArrowsForwardUp() {
  return (
    <div className="relative shrink-0 size-4" data-name="Arrows/Forward Up">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Arrows/Forward Up">
          <path
            clipRule="evenodd"
            d={svgPaths.p1ac6c100}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0" data-name="Icon">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative">
        <ArrowsForwardUp />
      </div>
    </div>
  );
}

function ControlItem7() {
  return (
    <div className="bg-[#ffffff] relative shrink-0" data-name="Control Item">
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative">
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Frame10769() {
  return (
    <div className="relative rounded-sm shrink-0">
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-sm" />
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <ControlItem />
        <ControlItem1 />
        <ControlItem2 />
        <ControlItem3 />
        <ControlItem4 />
        <ControlItem5 />
        <ControlItem6 />
        <ControlItem7 />
      </div>
    </div>
  );
}

function ControlGroup() {
  return (
    <div className="relative shrink-0" data-name="Control Group">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start pl-6 pr-0 py-0 relative">
          <Frame10769 />
        </div>
      </div>
    </div>
  );
}

function Frame11503() {
  return (
    <div className="bg-[#ffffff] relative rounded-sm shrink-0 w-[688px]">
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-sm" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-3 relative w-[688px]">
          <div className="css-yqdygo font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Did you attend the June 2025 Leadership camp?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11513() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative">
        <div className="css-yqdygo font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left w-6">
          <p className="block leading-[normal]">1.</p>
        </div>
        <Frame11503 />
      </div>
    </div>
  );
}

function Frame11500() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
        <ControlGroup />
        <Frame11513 />
      </div>
    </div>
  );
}

function Frame11505() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <Frame11500 />
      </div>
    </div>
  );
}

function RadioButtonChecked1() {
  return (
    <div className="relative shrink-0 size-5" data-name="radio_button_checked">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="radio_button_checked">
          <g id="Vector">
            <path d={svgPaths.p34103500} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3244d180} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame11499() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative">
        <RadioButtonChecked1 />
        <div className="css-yqdygo font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">Yes</p>
        </div>
      </div>
    </div>
  );
}

function Frame11501() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-sm shrink-0">
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-sm" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-4 py-2 relative w-full">
          <Frame11499 />
        </div>
      </div>
    </div>
  );
}

function DesignLayoutGrid() {
  return (
    <div className="relative shrink-0 size-6" data-name="Design/Layout Grid">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Design/Layout Grid">
          <g id="Vector">
            <path
              clipRule="evenodd"
              d={svgPaths.p3d435ef0}
              fill="var(--fill-0, #212529)"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3d435ef0}
              fill="var(--fill-1, black)"
              fillOpacity="0.2"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LibraryAdd() {
  return (
    <div className="relative shrink-0 size-6" data-name="library_add">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="library_add">
          <path
            d={svgPaths.p3c7c2c80}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Delete() {
  return (
    <div className="relative shrink-0 size-6" data-name="delete">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="delete">
          <path d={svgPaths.p293a070} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11509() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative w-full">
        <Frame11501 />
        <DesignLayoutGrid />
        <LibraryAdd />
        <Delete />
      </div>
    </div>
  );
}

function RadioButtonChecked2() {
  return (
    <div className="relative shrink-0 size-5" data-name="radio_button_checked">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="radio_button_checked">
          <g id="Vector">
            <path d={svgPaths.p34103500} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3244d180} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame11517() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative">
        <RadioButtonChecked2 />
        <div className="css-yqdygo font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">No</p>
        </div>
      </div>
    </div>
  );
}

function Frame11502() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-sm shrink-0">
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-sm" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-4 py-2 relative w-full">
          <Frame11517 />
        </div>
      </div>
    </div>
  );
}

function DesignLayoutGrid1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Design/Layout Grid">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Design/Layout Grid">
          <g id="Vector">
            <path
              clipRule="evenodd"
              d={svgPaths.p3d435ef0}
              fill="var(--fill-0, #212529)"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3d435ef0}
              fill="var(--fill-1, black)"
              fillOpacity="0.2"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LibraryAdd1() {
  return (
    <div className="relative shrink-0 size-6" data-name="library_add">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="library_add">
          <path
            d={svgPaths.p3c7c2c80}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Delete1() {
  return (
    <div className="relative shrink-0 size-6" data-name="delete">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="delete">
          <path d={svgPaths.p293a070} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11510() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative w-full">
        <Frame11502 />
        <DesignLayoutGrid1 />
        <LibraryAdd1 />
        <Delete1 />
      </div>
    </div>
  );
}

function Frame11508() {
  return (
    <div className="bg-[#d5d5d5] relative rounded-sm shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative">
          <div className="css-yqdygo font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Add option</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11511() {
  return (
    <div className="bg-[#d5d5d5] relative rounded-sm shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative">
          <div className="css-yqdygo font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Add ‘Others’ option
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11512() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative">
        <Frame11508 />
        <Frame11511 />
      </div>
    </div>
  );
}

function Frame11504() {
  return (
    <div className="relative shrink-0 w-[633px]">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pl-6 pr-0 py-0 relative w-[633px]">
          <Frame11509 />
          <Frame11510 />
          <Frame11512 />
        </div>
      </div>
    </div>
  );
}

function Frame11497() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative">
        <Frame11505 />
        <Frame11504 />
      </div>
    </div>
  );
}

function Frame11496() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
        <Frame11497 />
      </div>
    </div>
  );
}

function Frame11519() {
  return (
    <div className="bg-[rgba(204,204,204,0.8)] relative rounded-sm shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative">
          <div className="css-yqdygo font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Add display condition
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11518() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
        <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 274 2"
            >
              <path
                d="M0 1H273.5"
                id="Vector 11"
                stroke="var(--stroke-0, #CCCCCC)"
                strokeOpacity="0.8"
              />
            </svg>
          </div>
        </div>
        <Frame11519 />
        <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 274 2"
            >
              <path
                d="M0 1H273.5"
                id="Vector 11"
                stroke="var(--stroke-0, #CCCCCC)"
                strokeOpacity="0.8"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LibraryAdd2() {
  return (
    <div className="relative shrink-0 size-6" data-name="library_add">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="library_add">
          <path
            d={svgPaths.p3c7c2c80}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame11515() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
        <LibraryAdd2 />
        <div className="css-yqdygo font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            Duplicate field
          </p>
        </div>
      </div>
    </div>
  );
}

function Delete2() {
  return (
    <div className="relative shrink-0 size-6" data-name="delete">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="delete">
          <path d={svgPaths.p293a070} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11516() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
        <Delete2 />
        <div className="css-yqdygo font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">Delete field</p>
        </div>
      </div>
    </div>
  );
}

function Frame11520() {
  return (
    <div className="bg-[#000000] relative rounded-sm shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative">
          <div className="css-xb0uby font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Save field</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11514() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-[26px] items-center justify-start p-0 relative">
        <Frame11515 />
        <Frame11516 />
        <Frame11520 />
      </div>
    </div>
  );
}

function Frame11492() {
  return (
    <div className="absolute bg-[#f8f8f8] left-[311px] top-[180.664px] w-[744px]">
      <div className="flex flex-col items-end justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-end justify-center p-[16px] relative w-[744px]">
          <Frame11506 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 712 2"
              >
                <path
                  d="M0 1H712"
                  id="Vector 10"
                  stroke="var(--stroke-0, black)"
                />
              </svg>
            </div>
          </div>
          <Frame11496 />
          <Frame11518 />
          <Frame11514 />
        </div>
      </div>
    </div>
  );
}

function Frame11486() {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative">
          <div className="css-yqdygo font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Select audience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11487() {
  return (
    <div className="bg-[#ffffff] relative shrink-0">
      <div className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative">
          <div className="css-yqdygo font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Add fields</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11488() {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative">
          <div className="css-yqdygo font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              View responses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11489() {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative">
          <div className="css-yqdygo font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Add collaborators
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11490() {
  return (
    <div className="absolute left-1/2 top-5 translate-x-[-50%]">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <Frame11486 />
        <Frame11487 />
        <Frame11488 />
        <Frame11489 />
      </div>
    </div>
  );
}

function Frame11494() {
  return (
    <div className="absolute left-[939.297px] rounded-sm top-[72px]">
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-sm" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative">
          <div className="css-yqdygo font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Preview</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11493() {
  return (
    <div className="absolute bg-[#263238] left-[1019.3px] rounded-sm top-[72px]">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative">
          <div className="css-xb0uby font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">{`Publish & Share`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11485() {
  return (
    <div className="absolute bg-[#d9d9d9] left-[215.297px] rounded-sm top-[72px]">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative">
          <div className="css-yqdygo font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Unpublished</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Soe1367SubtractBrowserAndMicrosoftTaskBar() {
  return (
    <div
      className="bg-[#ffffff] relative size-full"
      data-name="SOE / 1367 (subtract browser and microsoft task bar)"
    >
      <div className="absolute css-yqdygo font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] left-[119px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-[14.336px]">
        <p className="block leading-[26px] whitespace-pre">All Ears</p>
      </div>
      <div className="absolute css-iiw2qh font-['Chalkboard:Regular',_sans-serif] font-normal leading-[0] left-[1182px] not-italic text-[#111111] text-[18px] text-left text-nowrap top-[14.336px]">
        <p className="block leading-[26px] whitespace-pre">User ID</p>
      </div>
      <Frame11492 />
      <Frame11490 />
      <div className="absolute bottom-[91.209%] left-0 right-0 top-[8.791%]">
        <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1366 2"
          >
            <path
              d="M0 1H1366"
              id="Vector 10"
              stroke="var(--stroke-0, #AAAAAA)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#f0f0f0] h-[100.664px] left-[0.297px] top-14 w-[1366px]" />
      <Frame11494 />
      <Frame11493 />
      <Frame11485 />
      <div className="absolute css-yqdygo font-['Chalkboard:Bold',_sans-serif] font-bold leading-[0] left-[215.297px] not-italic text-[#000000] text-[24px] text-left text-nowrap top-[106px]">
        <p className="block leading-[normal] whitespace-pre">
          Feedback form title
        </p>
      </div>
    </div>
  );
}