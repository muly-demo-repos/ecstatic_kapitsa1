import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";
import { PRODUCTIONORDER_TITLE_FIELD } from "../productionOrder/ProductionOrderTitle";
import { ROUTE_TITLE_FIELD } from "./RouteTitle";

export const RouteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Route Name" source="routeName" />
        <TextField label="Route Operation" source="routeOperation" />
        <TextField label="Route Operation Step" source="routeOperationStep" />
        <TextField label="Route Revision" source="routeRevision" />
        <ReferenceManyField reference="Batch" target="routeId" label="Batches">
          <Datagrid rowClick="show">
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Batch Actual Qty" source="batchActualQty" />
            <TextField label="Batch Class" source="batchClass" />
            <TextField label="Batch Class Id" source="batchClassId" />
            <TextField label="Batch Class Name" source="batchClassName" />
            <TextField label="Batch Id" source="batchId" />
            <TextField label="Batch Planned Qty" source="batchPlannedQty" />
            <TextField label="Batch Units" source="batchUnits" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Item" source="item.id" reference="Item">
              <TextField source={ITEM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Production Order"
              source="productionorder.id"
              reference="ProductionOrder"
            >
              <TextField source={PRODUCTIONORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Route" source="route.id" reference="Route">
              <TextField source={ROUTE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductionOrder"
          target="routeRouteId"
          label="ProductionOrders"
        >
          <Datagrid rowClick="show">
            <TextField label="Class Name" source="className" />
            <TextField label="Created At" source="createdAt" />
            <TextField label="Created By" source="createdBy" />
            <TextField label="Edited At" source="editedAt" />
            <TextField label="Edited By" source="editedBy" />
            <TextField label="End Date" source="endDate" />
            <BooleanField label="Firmed" source="firmed" />
            <TextField label="ID" source="id" />
            <BooleanField label="Released" source="released" />
            <ReferenceField label="Route" source="route.id" reference="Route">
              <TextField source={ROUTE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Schema Version" source="schemaVersion" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="State" source="state" />
            <ReferenceField label="Wip Item" source="item.id" reference="Item">
              <TextField source={ITEM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
