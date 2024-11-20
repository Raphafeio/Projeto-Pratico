/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(public)'}\welcome` | `\welcome`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}\profile` | `\profile`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(public)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(public)'}/register` | `/register`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(public)'}\welcome` | `\welcome`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}\profile` | `\profile`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/home` | `/home`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(public)'}/login` | `/login`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(public)'}/register` | `/register`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `${'/(public)'}\welcome${`?${string}` | `#${string}` | ''}` | `\welcome${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}\profile${`?${string}` | `#${string}` | ''}` | `\profile${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/home${`?${string}` | `#${string}` | ''}` | `/home${`?${string}` | `#${string}` | ''}` | `${'/(public)'}/login${`?${string}` | `#${string}` | ''}` | `/login${`?${string}` | `#${string}` | ''}` | `${'/(public)'}/register${`?${string}` | `#${string}` | ''}` | `/register${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(public)'}\welcome` | `\welcome`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}\profile` | `\profile`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(public)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(public)'}/register` | `/register`; params?: Router.UnknownInputParams; };
    }
  }
}
