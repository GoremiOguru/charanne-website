

import { Button } from "../src/components/ui/button"
export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline">Request a quote from us</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        
      </Button>
    </div>
  )
}
