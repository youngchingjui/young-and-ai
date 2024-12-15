```javascript
import { sectionData, SectionData } from "@/data/mockData"
import Section from "@/components/Section"

const fetchData = async (): Promise<SectionData[]> => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        if (sectionData && Array.isArray(sectionData)) {
          resolve(sectionData)
        } else {
          reject(new Error("Invalid data format"))
        }
      }, 1000)
    } catch (error) {
      reject(new Error("Failed to fetch data"))
    }
  })
}

export default async function PortfolioPage() {
  try {
    const data = await fetchData()

    console.log("retrieved data successfully")

    return (
      <div className="min-h-screen text-primary-foreground bg-gradient-to-br from-teal-800 via-teal-500 to-blue-300">
        <header className="container mx-auto pt-52 pb-6 px-4 bg-opacity-80 backdrop-blur-sm">
          <h1 className="text-5xl font-bold font-rokkitt">Young & AI</h1>
        </header>
        <main className="container mx-auto px-4 py-8">
          {data.map((section, index) => (
            <Section key={index} data={section} />
          ))}
        </main>
      </div>
    )
  } catch (error) {
    console.error("Error fetching data:", error.message)
    return <div className="text-red-500">An error occurred while loading the portfolio. Please try again later.</div>
  }
}
```

### Changes & Error Checking:
1. **Error Handling for `fetchData`:** Added try-catch within the `new Promise` to catch any unexpected runtime errors and ensure `reject` is called appropriately.
   
2. **Data Validation:** Before resolving in the `setTimeout`, the code now checks if `sectionData` is an array to ensure the data format is correct.

3. **Handling Errors in `PortfolioPage`:** Wrapped the entire logic in a try-catch block to handle possible errors from `fetchData` and provide feedback to the user by rendering an error message within the component if fetching fails.

4. **Error Logging:** Added `console.error` for better logging in case of any data fetching issues, aiding in debugging during development.