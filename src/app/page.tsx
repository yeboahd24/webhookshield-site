import {
  Shield,
  CheckCircle,
  RefreshCw,
  Zap,
  Lock,
  Clock,
  BarChart3,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Shield className="size-6 text-accent" />
            <span className="text-xl font-bold">WebhookShield</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">
              Features
            </a>
            <a href="#providers" className="text-sm text-muted-foreground hover:text-foreground">
              Providers
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground">
              How It Works
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
              Pricing
            </a>
          </div>
          <a
            href="#get-started"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-accent)_0%,_transparent_50%)] opacity-5" />
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm">
            <span className="text-accent font-medium">Now Available</span>
            <span className="text-muted-foreground">Built for Ghana&apos;s developer ecosystem</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-[1.1]">
            Stop losing webhooks.
            <br />
            <span className="text-accent">Start trusting them.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            WebhookShield is the reliability and trust layer between webhook senders and your
            application. Signature verification, replay prevention, guaranteed delivery with
            automatic retries — for MTN MoMo, Hubtel, Paystack, and any webhook provider.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#get-started"
              className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-medium text-accent-foreground hover:bg-accent/90"
            >
              Get Started Free
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-base font-medium hover:bg-muted"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-y border-border bg-muted/50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">The problem every Ghanaian developer faces</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              You integrate MoMo, Hubtel, or Paystack webhooks. Then things go wrong.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Silent failures",
                desc: "Your server was down for 2 minutes. MoMo sent a payment notification. You never got it. The customer paid but your system doesn't know.",
              },
              {
                title: "Webhook fraud",
                desc: "Anyone who knows your callback URL can send fake payment confirmations. No standard way to verify the sender.",
              },
              {
                title: "Replay attacks",
                desc: "A valid webhook is intercepted and replayed 10 times. Your system processes the same payment notification 10 times.",
              },
              {
                title: "No audit trail",
                desc: "When something goes wrong, you have no record of what was received, when, or whether it was processed.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Everything you need for webhook reliability</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Drop WebhookShield between your webhook senders and your application. Get instant
              trust, reliability, and visibility.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Lock,
                title: "Signature Verification",
                desc: "Every webhook is cryptographically verified. HMAC-SHA256 for standard providers, adapter-specific verification for MoMo, Hubtel, and Paystack.",
              },
              {
                icon: Shield,
                title: "Replay Prevention",
                desc: "Each webhook ID is tracked in Redis. Duplicates are rejected within a configurable time window. No more double-processing payments.",
              },
              {
                icon: Clock,
                title: "Freshness Validation",
                desc: "Stale webhooks are rejected. Configurable tolerance window (default 5 minutes) prevents old webhooks from being replayed.",
              },
              {
                icon: RefreshCw,
                title: "Guaranteed Delivery",
                desc: "If your server is down, webhooks are queued in RabbitMQ and retried with exponential backoff. Up to 5 attempts before dead-lettering.",
              },
              {
                icon: BarChart3,
                title: "Full Audit Trail",
                desc: "Every webhook is logged with its payload, headers, delivery attempts, and status. See exactly what happened and when.",
              },
              {
                icon: Zap,
                title: "Manual Replay",
                desc: "Failed or dead-lettered webhooks can be replayed with a single click from the dashboard or API call.",
              },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl border border-border p-6">
                <div className="flex size-10 items-center justify-center rounded-lg bg-accent/10">
                  <feature.icon className="size-5 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Providers */}
      <section id="providers" className="border-y border-border bg-muted/50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Works with your existing providers</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              No need to ask MTN or Hubtel to change their webhook format. WebhookShield adapts to
              each provider&apos;s proprietary format automatically.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "MTN MoMo",
                auth: "Static callback token",
                desc: "X-Callback-Token header verification with constant-time comparison",
              },
              {
                name: "Hubtel",
                auth: "URL-based security",
                desc: "Sender UUID in the ingestion URL acts as access control",
              },
              {
                name: "Paystack",
                auth: "HMAC-SHA512",
                desc: "X-Paystack-Signature header with full payload signing",
              },
              {
                name: "Custom / Generic",
                auth: "HMAC-SHA256",
                desc: "Standard WebhookShield format for any provider that adopts it",
              },
            ].map((provider) => (
              <div
                key={provider.name}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="text-lg font-semibold">{provider.name}</h3>
                <span className="mt-1 inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                  {provider.auth}
                </span>
                <p className="mt-3 text-sm text-muted-foreground">{provider.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">How it works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three steps to reliable, verified webhooks.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Register sender & receiver",
                desc: "Register your webhook provider (e.g., MTN MoMo) as a sender and your application as a receiver. You get signing secrets for both.",
              },
              {
                step: "02",
                title: "Point webhooks to WebhookShield",
                desc: "Configure your provider's callback URL to point to your WebhookShield ingestion endpoint. Webhooks are verified, logged, and queued.",
              },
              {
                step: "03",
                title: "Receive verified, reliable webhooks",
                desc: "WebhookShield delivers the webhook to your application, re-signed with your receiver secret. Failed deliveries are retried automatically.",
              },
            ].map((step) => (
              <div key={step.step} className="relative rounded-xl border border-border p-6">
                <span className="text-4xl font-bold text-accent/20">{step.step}</span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code example */}
      <section className="border-y border-border bg-muted/50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Simple to integrate</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Register a receiver, create a sender, and start receiving verified webhooks.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-xl border border-border bg-[#0a0a0a] text-sm">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <div className="size-3 rounded-full bg-red-500/80" />
              <div className="size-3 rounded-full bg-yellow-500/80" />
              <div className="size-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-white/40">Terminal</span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed text-green-400">
              <code>{`# 1. Create a receiver (your application)
curl -X POST http://localhost:8080/api/v1/receivers \\
  -H "Content-Type: application/json" \\
  -d '{"name": "My App", "endpoint_url": "https://myapp.com/webhooks"}'

# Response: {"receiver": {...}, "secret": "17bea62d..."}

# 2. Create a sender (e.g., MTN MoMo)
curl -X POST http://localhost:8080/api/v1/senders \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "MTN MoMo",
    "slug": "mtn-momo",
    "provider_type": "mtn_momo",
    "receiver_id": "<receiver-id>"
  }'

# Response: {"sender": {...}, "secret": "e0f90615..."}

# 3. Configure MoMo callback URL:
#    https://your-webhookshield.com/ingest/<sender-id>
#    Set the callback token to the sender secret

# Done! Webhooks are now verified, logged, and reliably delivered.`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Pricing that scales with you</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start free. Pay only when your webhook volume grows.
              Self-host anytime with the open source edition.
            </p>
          </div>
          <div className="mx-auto mt-12 grid gap-6 lg:grid-cols-4">
            {[
              {
                name: "Free",
                price: "GHS 0",
                period: "forever",
                desc: "For developers testing integrations and side projects.",
                features: [
                  "10,000 webhooks/month",
                  "1 sender, 1 receiver",
                  "3 day event log retention",
                  "All provider adapters",
                  "Community support",
                ],
                cta: "Get Started Free",
                ctaHref: "#get-started",
                highlight: false,
              },
              {
                name: "Starter",
                price: "GHS 200",
                period: "/month",
                desc: "For small fintechs and startups processing real transactions.",
                features: [
                  "100,000 webhooks/month",
                  "5 senders, 10 receivers",
                  "30 day retention",
                  "Email support",
                  "Dashboard & API access",
                ],
                cta: "Start Free Trial",
                ctaHref: "#get-started",
                highlight: false,
              },
              {
                name: "Growth",
                price: "GHS 800",
                period: "/month",
                desc: "For scaling fintechs and logistics companies.",
                features: [
                  "1,000,000 webhooks/month",
                  "Unlimited senders & receivers",
                  "90 day retention",
                  "Key rotation + audit logs",
                  "Priority support",
                ],
                cta: "Start Free Trial",
                ctaHref: "#get-started",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                desc: "For banks, telcos, and large platforms with compliance needs.",
                features: [
                  "Unlimited everything",
                  "1 year retention",
                  "99.9% uptime SLA",
                  "On-premise deployment",
                  "Dedicated support + onboarding",
                  "Compliance reports (BoG ready)",
                ],
                cta: "Contact Sales",
                ctaHref: "mailto:sales@webhookshield.dev",
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-xl border p-6 ${
                  plan.highlight
                    ? "border-2 border-accent"
                    : "border-border"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <div className="mt-3">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{plan.desc}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="mt-0.5 size-4 shrink-0 text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.ctaHref}
                  className={`mt-6 flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium ${
                    plan.highlight
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "border border-border hover:bg-muted"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            All paid plans include a 14-day free trial. No credit card required.
            <br />
            Need a self-hosted or on-premise deployment?{" "}
            <a href="mailto:sales@webhookshield.dev" className="text-accent hover:underline">
              Contact us for enterprise options.
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="border-t border-border bg-primary px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary-foreground">
            Ready to stop losing webhooks?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/70">
            Get started in under 5 minutes with Docker Compose. Or join the waitlist for our managed
            cloud offering.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-medium text-accent-foreground hover:bg-accent/90"
            >
              Start Free Trial
              <ArrowRight className="size-4" />
            </a>
            <a
              href="mailto:sales@webhookshield.dev"
              className="flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-base font-medium text-primary-foreground hover:bg-primary-foreground/10"
            >
              Contact Sales
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Shield className="size-5 text-accent" />
            <span className="font-semibold">WebhookShield</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built for Ghana&apos;s developer ecosystem.
          </p>
          <a
            href="mailto:sales@webhookshield.dev"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            sales@webhookshield.dev
          </a>
        </div>
      </footer>
    </div>
  );
}
