import { i18n } from "@lingui/core";
import { en, de, fr } from "make-plural/plurals";
import enCollection from "../locale/en/messages";
import deCollection from "../locale/de/messages";
import frCollection from "../locale/fr/messages";

export const loadLocales = () => {
  i18n.loadLocaleData("en", { plurals: en });
  i18n.loadLocaleData("de", { plurals: de });
  i18n.loadLocaleData("fr", { plurals: fr });

  i18n.load("en", enCollection.messages);
  i18n.load("de", deCollection.messages);
  i18n.load("fr", frCollection.messages);
};
