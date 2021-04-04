import React, { Suspense } from "react";
import { Trans, useTranslation } from "react-i18next";

// Component using the Trans component
function MyComponent() {
  return (
    <Trans i18nKey="description.part1">
      To get started, edit <code>src/App.js</code> and save to reload.
    </Trans>
  );
}

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="App-header">
        {/* <Welcome /> */}
        <button type="button" onClick={() => changeLanguage("de")}>
          de
        </button>
        <button type="button" onClick={() => changeLanguage("en")}>
          en
        </button>
      </div>
      <div className="App-intro">
        <MyComponent />
      </div>
      <div>{t("description.part2")}</div>
    </div>
  );
}

// here app catches the suspense from page in case translations are not yet loaded
export default function HomeComponent() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}
