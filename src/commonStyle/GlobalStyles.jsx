import { createGlobalStyle } from 'styled-components';
import theme from './variables';

export const GlobalStyles = createGlobalStyle`
	html {
	scroll-behavior: smooth;
	}
	body {
		font-family: 'Inter', sans-serif;
		min-height: 100vh;
		font-size: ${theme.fontSizes.medium};
		font-style: normal;
		background-color: ${theme.colors.body};
		color: ${theme.colors.primaryDark};
 		font-weight: 400;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
	}

	ul,
	ol {
		list-style: none;
		padding-left: 0;
		margin: 0;
	}

	button {
		padding: 0;
		border: none;
		font: inherit;
		color: inherit;
		cursor: pointer;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	img {
		display: block;
		max-width: 100%;
		height: auto;
	}

		[class="container"]{
		width: 1440px;
		padding: 0 128px;
		margin-left:  auto;
		margin-right: auto;
	}


/* ---------------- Input arrow -------------- */
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type='number'],
input[type='number']:hover,
input[type='number']:focus {
  appearance: none;
  -moz-appearance: textfield;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

/* ----------------Loader CSS--------------- */
.LoaderWr {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

}
.LoaderWrCon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* z-index: 12000000000000; */
}
`;
