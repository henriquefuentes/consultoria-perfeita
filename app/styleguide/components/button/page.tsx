import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Loader2, Plus, Search } from "lucide-react"

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-heading text-xl font-semibold">{title}</h2>
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {children}
      </div>
    </div>
  )
}

export default function ButtonPage() {
  return (
    <div className="p-8 max-w-4xl space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Button</h1>
        <p className="text-muted-foreground mt-2">Triggers an action or event when clicked.</p>
      </div>

      <Section title="Variants" description="Choose from six semantic variants.">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </Section>

      <Section title="Sizes" description="Three sizes to match different contexts.">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </Section>

      <Section title="With Icons" description="Combine with Lucide icons for richer affordance.">
        <Button>
          <Plus /> Add Item
        </Button>
        <Button variant="outline">
          <Download /> Export
        </Button>
        <Button variant="secondary">
          Search <Search />
        </Button>
        <Button>
          Continue <ArrowRight />
        </Button>
      </Section>

      <Section title="Icon Only" description="Use the icon size for compact actions.">
        <Button size="icon" variant="default" aria-label="Add">
          <Plus />
        </Button>
        <Button size="icon" variant="outline" aria-label="Search">
          <Search />
        </Button>
        <Button size="icon" variant="ghost" aria-label="Download">
          <Download />
        </Button>
      </Section>

      <Section title="Loading State" description="Communicate async operations in progress.">
        <Button disabled>
          <Loader2 className="animate-spin" /> Saving…
        </Button>
        <Button variant="outline" disabled>
          <Loader2 className="animate-spin" /> Loading…
        </Button>
      </Section>

      <Section title="Disabled" description="Prevents user interaction when not applicable.">
        <Button disabled>Default</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="outline" disabled>Outline</Button>
        <Button variant="ghost" disabled>Ghost</Button>
        <Button variant="destructive" disabled>Destructive</Button>
      </Section>
    </div>
  )
}
