import './App.css'
import data from "./components/data"
import Header from "./components/header.jsx"
import Info from "./components/info.jsx"

export default function App() {
  const detail = data.map(item => {
    return (
      <Info
        key={item.id}
        title={item.title}
        location={item.location}
        url={item.Url}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageURL={item.imageUrl}
      />
    );
  })

  return (
    <div>
      <Header />
      {detail}
    </div>
  )

}
