const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
    <p className="eyebrow">404</p>
    <h1 className="font-display text-6xl">Wrong stop.</h1>
    <a href="/" className="rounded-full bg-foreground px-5 py-2.5 text-sm text-background">
      Back home
    </a>
  </div>
);

export default NotFound;
