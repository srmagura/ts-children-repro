import * as React from 'react'

type Tab = [string, React.ReactNode]  // [tabName, tabContent]

interface Props {
    children: Tab[]
}

function TabLayout(props: Props) {
    return <div/>
}

export class App extends React.Component<{}> {
    render() {
        return <TabLayout>
            {[
                ['Users', <div/>],
                ['Products', <div/>]
            ]}
        </TabLayout>
    }
}
