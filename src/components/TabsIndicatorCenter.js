import React, { useState } from "react";
import PropTypes from "prop-types";
import AtomTabIndicatorCenter from "./AtomTabIndicatorCenter";
import TabPanel from "./TabPanel";
import AtomTabsIndicatorCenter from "./AtomTabsIndicatorCenter";
import Box from "@material-ui/core/Box";

export default function TabsIndicatorCenter(props) {
  const {
    tabs,
    defaultTab,
    TabLabelComponent,
    TabContentComponent,
    TabContentWrapper,
    TabContentWrapperProps,
    tabProps,
    tabPanelProps,
    handleChange,
    tabActive,
  } = props;

  const [value, setValue] = useState(defaultTab || 0);

  const onChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AtomTabsIndicatorCenter
        value={handleChange ? tabActive : value}
        onChange={handleChange || onChange}
        aria-label="tour info tabs"
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabs.map((tab, index) => {
          const key = index;
          return (
            <AtomTabIndicatorCenter
              key={key}
              label={
                TabLabelComponent ? <TabLabelComponent {...tab} /> : tab.label
              }
              {...tabProps}
            />
          );
        })}
      </AtomTabsIndicatorCenter>
      {tabs.map((tab, index) => {
        const key = index;
        return (
          <TabPanel
            key={key}
            value={handleChange ? tabActive : value}
            index={index}
            {...tabPanelProps}
          >
            <Box component={TabContentWrapper} style={{paddingTop: '32px'}} {...TabContentWrapperProps}>
              {TabContentComponent ? (
                <TabContentComponent {...tab} />
              ) : (
                tab.content
              )}
            </Box>
          </TabPanel>
        );
      })}
    </div>
  );
}
TabsIndicatorCenter.propTypes = {
  tabs: PropTypes.array, // array các tab
  defaultTab: PropTypes.number, // tab index mặc định
  TabLabelComponent: PropTypes.elementType, // custom tab
  TabContentComponent: PropTypes.elementType, // custom tab content
  TabContentWrapper: PropTypes.elementType, // bọc tab content
  TabContentWrapperProps: PropTypes.object, // props cho thẻ bọc tab content (thường là padding)
  tabProps: PropTypes.object, // props cho tab label
  tabPanelProps: PropTypes.object, // props cho tab panel
  handleChange: PropTypes.func,
  tabActive: PropTypes.number, // custom tab active
};
