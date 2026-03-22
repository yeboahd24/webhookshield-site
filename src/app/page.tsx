import {
  Shield,
  CheckCircle,
  RefreshCw,
  Zap,
  Lock,
  Clock,
  BarChart3,
  ArrowRight,
  X,
  AlertTriangle,
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
            <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground">
              Why
            </a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground">
              How It Works
            </a>
            <a href="#compare" className="text-sm text-muted-foreground hover:text-foreground">
              Compare
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
              Pricing
            </a>
          </div>
          <a
            href="#get-started"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            Send Your First Webhook
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
            Never lose a
            <br />
            <span className="text-accent">webhook again.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Guaranteed delivery, automatic retries, and cryptographic verification
            for your webhooks. Drop-in reliability layer for MTN MoMo, Hubtel, Paystack,
            and any webhook provider.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#get-started"
              className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-medium text-accent-foreground hover:bg-accent/90"
            >
              Send a reliable webhook in 2 minutes
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
      <section id="problem" className="border-y border-border bg-muted/50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">When webhooks fail, everything breaks</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Webhooks fail silently — and your system pays the price.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: AlertTriangle,
                title: "Payments vanish",
                desc: "Your server was down for 2 minutes. MoMo sent a payment notification. You never got it. The customer paid — your system doesn't know.",
              },
              {
                icon: AlertTriangle,
                title: "Orders go missing",
                desc: "A webhook from Hubtel never arrives. The order sits unprocessed. The customer calls support. You have no idea what happened.",
              },
              {
                icon: AlertTriangle,
                title: "Duplicates pile up",
                desc: "A valid webhook is replayed 10 times. Your system processes the same payment 10 times. Refunds, angry customers, manual cleanup.",
              },
              {
                icon: AlertTriangle,
                title: "Debugging takes hours",
                desc: "Something went wrong. Was the webhook sent? Did it arrive? Was the signature valid? No logs, no trail, no answers.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-background p-6"
              >
                <item.icon className="size-5 text-red-500" />
                <h3 className="mt-3 font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Where WebhookShield sits</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A single reliability layer between your providers and your app. No code changes on the provider side.
            </p>
          </div>
          <div className="mt-14 flex flex-col items-center gap-0">
            {/* Providers */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {["MTN MoMo", "Paystack", "Hubtel", "Any Provider"].map((name) => (
                <div
                  key={name}
                  className="rounded-lg border border-border bg-muted px-5 py-3 text-sm font-medium"
                >
                  {name}
                </div>
              ))}
            </div>
            {/* Arrow down */}
            <div className="flex flex-col items-center py-3">
              <div className="h-8 w-px bg-accent" />
              <div className="size-0 border-x-[6px] border-t-[8px] border-x-transparent border-t-accent" />
            </div>
            {/* WebhookShield */}
            <div className="w-full max-w-md rounded-xl border-2 border-accent bg-accent/5 p-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <Shield className="size-6 text-accent" />
                <span className="text-xl font-bold text-accent">WebhookShield</span>
              </div>
              <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full bg-accent/10 px-2.5 py-1">Verify</span>
                <span className="rounded-full bg-accent/10 px-2.5 py-1">Deduplicate</span>
                <span className="rounded-full bg-accent/10 px-2.5 py-1">Queue</span>
                <span className="rounded-full bg-accent/10 px-2.5 py-1">Retry</span>
                <span className="rounded-full bg-accent/10 px-2.5 py-1">Log</span>
              </div>
            </div>
            {/* Arrow down */}
            <div className="flex flex-col items-center py-3">
              <div className="h-8 w-px bg-accent" />
              <div className="size-0 border-x-[6px] border-t-[8px] border-x-transparent border-t-accent" />
            </div>
            {/* Your App */}
            <div className="rounded-xl border-2 border-green-500/50 bg-green-500/5 px-10 py-4 text-center">
              <span className="text-lg font-bold text-green-600">Your App</span>
              <p className="mt-1 text-xs text-muted-foreground">Verified, reliable, deduplicated webhooks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-y border-border bg-muted/50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Built for webhooks that can&apos;t afford to fail</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Not &quot;secure&quot;. Not &quot;reliable&quot;. Not &quot;fast&quot;.
              Here&apos;s exactly what WebhookShield does.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Lock,
                title: "Signed webhooks with replay attack protection",
                desc: "Every webhook is cryptographically verified. HMAC-SHA256 for standard providers, adapter-specific verification for MoMo, Hubtel, and Paystack.",
              },
              {
                icon: Shield,
                title: "Idempotent event handling",
                desc: "Each webhook ID is tracked in Redis. Duplicates are rejected within a configurable time window. No more double-processing payments.",
              },
              {
                icon: Clock,
                title: "Freshness validation with configurable windows",
                desc: "Stale webhooks are rejected. Configurable tolerance window (default 5 minutes) prevents old webhooks from being replayed.",
              },
              {
                icon: RefreshCw,
                title: "Automatic retries with exponential backoff",
                desc: "If your server is down, webhooks are queued in RabbitMQ and retried with exponential backoff. Up to 5 attempts before dead-lettering.",
              },
              {
                icon: BarChart3,
                title: "Event logs with full replay capability",
                desc: "Every webhook is logged with its payload, headers, delivery attempts, and status. See exactly what happened and when.",
              },
              {
                icon: Zap,
                title: "One-click replay for failed deliveries",
                desc: "Failed or dead-lettered webhooks can be replayed with a single click from the dashboard or API call. No data loss, ever.",
              },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl border border-border bg-background p-6">
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
      <section id="providers" className="px-6 py-20">
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
      <section id="how-it-works" className="border-y border-border bg-muted/50 px-6 py-20">
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
              <div key={step.step} className="relative rounded-xl border border-border bg-background p-6">
                <span className="text-4xl font-bold text-accent/20">{step.step}</span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code example */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Integrate in minutes, not days</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A simple REST API. Register a receiver, create a sender, and start receiving verified webhooks.
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

          {/* Inline Go snippet */}
          <div className="mt-6 overflow-hidden rounded-xl border border-border bg-[#0a0a0a] text-sm">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <div className="size-3 rounded-full bg-red-500/80" />
              <div className="size-3 rounded-full bg-yellow-500/80" />
              <div className="size-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-white/40">handler.go — receiving verified webhooks</span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed text-blue-400">
              <code>{`func HandleWebhook(w http.ResponseWriter, r *http.Request) {
    // WebhookShield re-signs with your receiver secret
    signature := r.Header.Get("X-WebhookShield-Signature")
    if !webhookshield.Verify(signature, r.Body, receiverSecret) {
        http.Error(w, "invalid signature", http.StatusUnauthorized)
        return
    }

    // Safe to process — verified, deduplicated, fresh
    processPaymentNotification(r.Body)
    w.WriteHeader(http.StatusOK)
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="compare" className="border-y border-border bg-muted/50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Why not just use provider webhooks directly?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Provider webhooks work — until they don&apos;t. Here&apos;s what you&apos;re missing.
            </p>
          </div>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 pr-4 text-left font-semibold"></th>
                  <th className="px-4 py-4 text-center font-semibold text-muted-foreground">
                    Direct from Provider
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-accent">
                    With WebhookShield
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Retry guarantees",
                    without: "Varies by provider, often limited or unclear",
                    with: "Guaranteed retries with exponential backoff",
                  },
                  {
                    feature: "Replay attack protection",
                    without: "Not provided",
                    with: "Automatic deduplication via Redis",
                  },
                  {
                    feature: "Debugging failed webhooks",
                    without: "Check provider dashboard (if available)",
                    with: "Full event log with payload, headers, and status",
                  },
                  {
                    feature: "Signature verification",
                    without: "Different per provider, easy to get wrong",
                    with: "Standardized — handled automatically per provider",
                  },
                  {
                    feature: "Replay failed events",
                    without: "Not possible",
                    with: "One-click replay from dashboard or API",
                  },
                  {
                    feature: "Consistent format",
                    without: "Every provider is different",
                    with: "Unified, re-signed delivery to your app",
                  },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-border">
                    <td className="py-4 pr-4 font-medium">{row.feature}</td>
                    <td className="px-4 py-4 text-center text-muted-foreground">
                      <div className="flex items-center justify-center gap-2">
                        <X className="size-4 text-red-400" />
                        <span>{row.without}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="size-4 text-green-500" />
                        <span>{row.with}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                cta: "Start for Free",
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
            Send your first reliable webhook in 2 minutes
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/70">
            Get started with Docker Compose. Or join the waitlist for our managed
            cloud offering.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-medium text-accent-foreground hover:bg-accent/90"
            >
              Test Webhook Delivery Now
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
