/* typehints:start */
import { BeltComponent } from "./components/belt";
import { BeltUnderlaysComponent } from "./components/belt_underlays";
import { HubComponent } from "./components/hub";
import { ItemAcceptorComponent } from "./components/item_acceptor";
import { ItemEjectorComponent } from "./components/item_ejector";
import { ItemProcessorComponent } from "./components/item_processor";
import { MinerComponent } from "./components/miner";
import { StaticMapEntityComponent } from "./components/static_map_entity";
import { StorageComponent } from "./components/storage";
import { UndergroundBeltComponent } from "./components/underground_belt";
import { WiredPinsComponent } from "./components/wired_pins";
import { WireComponent } from "./components/wire";
import { ConstantSignalComponent } from "./components/constant_signal";
import { LogicGateComponent } from "./components/logic_gate";
import { LeverComponent } from "./components/lever";
import { WireTunnelComponent } from "./components/wire_tunnel";
import { DisplayComponent } from "./components/display";
import { BeltReaderComponent } from "./components/belt_reader";
import { FilterComponent } from "./components/filter";
import { ItemProducerComponent } from "./components/item_producer";
/* typehints:end */

/**
 * Typedefs for all entity components. These are not actually present on the entity,
 * thus they are undefined by default
 */
export class EntityComponentStorage {
    constructor() {
        /* typehints:start */

        /** @type {StaticMapEntityComponent} */
        this.StaticMapEntity;

        /** @type {BeltComponent} */
        this.Belt;

        /** @type {ItemEjectorComponent} */
        this.ItemEjector;

        /** @type {ItemAcceptorComponent} */
        this.ItemAcceptor;

        /** @type {MinerComponent} */
        this.Miner;

        /** @type {ItemProcessorComponent} */
        this.ItemProcessor;

        /** @type {UndergroundBeltComponent} */
        this.UndergroundBelt;

        /** @type {HubComponent} */
        this.Hub;

        /** @type {StorageComponent} */
        this.Storage;

        /** @type {WiredPinsComponent} */
        this.WiredPins;

        /** @type {BeltUnderlaysComponent} */
        this.BeltUnderlays;

        /** @type {WireComponent} */
        this.Wire;

        /** @type {ConstantSignalComponent} */
        this.ConstantSignal;

        /** @type {LogicGateComponent} */
        this.LogicGate;

        /** @type {LeverComponent} */
        this.Lever;

        /** @type {WireTunnelComponent} */
        this.WireTunnel;

        /** @type {DisplayComponent} */
        this.Display;

        /** @type {BeltReaderComponent} */
        this.BeltReader;

        /** @type {FilterComponent} */
        this.Filter;

        /** @type {ItemProducerComponent} */
        this.ItemProducer;

        /* typehints:end */
    }

    /**
     * Returns current component types
     * @returns {Array<string>}
     */
    GetTypes() {
        let types = [];
        if (this.StaticMapEntity) types.push("StaticMapEntity");
        if (this.Belt) types.push("Belt");
        if (this.ItemEjector) types.push("ItemEjector");
        if (this.ItemAcceptor) types.push("ItemAcceptor");
        if (this.Miner) types.push("Miner");
        if (this.ItemProcessor) types.push("ItemProcessor");
        if (this.UndergroundBelt) types.push("UndergroundBelt");
        if (this.Hub) types.push("Hub");
        if (this.Storage) types.push("Storage");
        if (this.WiredPins) types.push("WiredPins");
        if (this.BeltUnderlays) types.push("BeltUnderlays");
        if (this.Wire) types.push("Wire");
        if (this.ConstantSignal) types.push("ConstantSignal");
        if (this.LogicGate) types.push("LogicGate");
        if (this.Lever) types.push("Lever");
        if (this.WireTunnel) types.push("WireTunnel");
        if (this.Display) types.push("Display");
        if (this.BeltReader) types.push("BeltReader");
        if (this.Filter) types.push("Filter");
        if (this.ItemProducer) types.push("ItemProducer");

        return types;
    }

    /**
     * Returns all possible component types
     * @returns {Array<string>}
     */
    static GetAllTypes() {
        return [
            "StaticMapEntity",
            "Belt",
            "ItemEjector",
            "ItemAcceptor",
            "Miner",
            "ItemProcessor",
            "UndergroundBelt",
            "Hub",
            "Storage",
            "WiredPins",
            "BeltUnderlays",
            "Wire",
            "ConstantSignal",
            "LogicGate",
            "Lever",
            "WireTunnel",
            "Display",
            "BeltReader",
            "Filter",
            "ItemProducer",
        ];
    }
}
