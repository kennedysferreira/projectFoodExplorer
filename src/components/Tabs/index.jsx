import { Container, TabList, TabButton, TabContent } from "./style";

export function Tabs({ tabs, activeTab, onTabChange, children }) {
  return (
    <Container>
      <TabList>
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            $isActive={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </TabButton>
        ))}
      </TabList>
      <TabContent>{children}</TabContent>
    </Container>
  );
}
