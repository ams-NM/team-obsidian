/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MyPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  mySetting: "default",
  htmlPath: "D:\\"
};
var MyPlugin = class extends import_obsidian.Plugin {
  onload() {
    return __async(this, null, function* () {
      yield this.loadSettings();
      const ribbonIconEl = this.addRibbonIcon("dice", "A.J. Plugin", (evt) => {
        this.app.workspace.iterateAllLeaves((leaf) => {
          var _a;
          if (leaf.getViewState().type == "markdown") {
            let leafContainer = leaf.view.containerEl;
            let title = (_a = leafContainer.querySelector("div.view-header-title")) == null ? void 0 : _a.textContent;
            let content = leafContainer.querySelector("div.view-content");
            try {
              const fs = require("fs");
              const { vault } = this.app;
              const path = this.settings.htmlPath;
              let file = title.replace(" ", "-") + ".html";
              const fullPath = path + "/" + file;
              let adapter = vault.adapter;
              let vaultpath = "";
              if (adapter instanceof import_obsidian.FileSystemAdapter) {
                vaultpath = adapter.getBasePath();
              }
              const plugindir = this.manifest.dir;
              const beginFile = vaultpath + "/" + plugindir + "/begin.txt";
              const begin = fs.readFileSync(beginFile);
              const endFile = vaultpath + "/" + plugindir + "/end.txt";
              const end = fs.readFileSync(endFile);
              const html = begin + (content == null ? void 0 : content.outerHTML) + end;
              fs.writeFileSync(fullPath, html);
              window.alert(`"${file}" was save to ${path}`);
            } catch (error) {
              console.error(error);
            }
          }
        });
      });
      ribbonIconEl.addClass("my-plugin-ribbon-class");
      const statusBarItemEl = this.addStatusBarItem();
      statusBarItemEl.setText("Status Bar Text");
      this.addCommand({
        id: "open-sample-modal-simple",
        name: "Open sample modal (simple)",
        callback: () => {
          new SampleModal(this.app).open();
        }
      });
      this.addCommand({
        id: "sample-editor-command",
        name: "Sample editor command",
        editorCallback: (editor, view) => {
          console.log(editor.getSelection());
          editor.replaceSelection("Sample Editor Command");
        }
      });
      this.addCommand({
        id: "open-sample-modal-complex",
        name: "Open sample modal (complex)",
        checkCallback: (checking) => {
          const markdownView = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
          if (markdownView) {
            if (!checking) {
              new SampleModal(this.app).open();
            }
            return true;
          }
        }
      });
      this.addSettingTab(new SampleSettingTab(this.app, this));
      this.registerDomEvent(document, "click", (evt) => {
      });
      this.registerInterval(window.setInterval(() => console.log("setInterval"), 5 * 60 * 1e3));
    });
  }
  onunload() {
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
};
var SampleModal = class extends import_obsidian.Modal {
  constructor(app) {
    super(app);
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.setText("Woah!");
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var SampleSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: 'Settings for "Save note as html" plugin.' });
    new import_obsidian.Setting(containerEl).setName("Target Path:").setDesc("Where do you want to save the html file?").addText((text) => text.setPlaceholder("Enter a absolute path").setValue(this.plugin.settings.htmlPath).onChange((value) => __async(this, null, function* () {
      console.log("Secret: " + value);
      this.plugin.settings.htmlPath = value;
      yield this.plugin.saveSettings();
    })));
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IEFwcCwgRWRpdG9yLCBGaWxlU3lzdGVtQWRhcHRlciwgTWFya2Rvd25WaWV3LCBNb2RhbCwgTm90aWNlLCBQbHVnaW4sIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcsIFRBYnN0cmFjdEZpbGUgfSBmcm9tICdvYnNpZGlhbic7XG5cbi8vIFJlbWVtYmVyIHRvIHJlbmFtZSB0aGVzZSBjbGFzc2VzIGFuZCBpbnRlcmZhY2VzIVxuXG5pbnRlcmZhY2UgTXlQbHVnaW5TZXR0aW5ncyB7XG5cdG15U2V0dGluZzogc3RyaW5nO1xuXHRodG1sUGF0aDogc3RyaW5nO1xufVxuXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBNeVBsdWdpblNldHRpbmdzID0ge1xuXHRteVNldHRpbmc6ICdkZWZhdWx0Jyxcblx0aHRtbFBhdGg6ICdEOlxcXFwnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15UGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcblx0c2V0dGluZ3M6IE15UGx1Z2luU2V0dGluZ3M7XG5cblx0YXN5bmMgb25sb2FkKCkge1xuXHRcdGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cblx0XHQvLyB0aGlzLnJlZ2lzdGVyTWFya2Rvd25Qb3N0UHJvY2Vzc29yKChlbGVtZW50LCBjb250ZXh0KSA9PiB7XG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhlbGVtZW50KVxuXHRcdC8vIFx0Y29uc3Qgd2hvbGVQYWdlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcblx0XHQvLyBcdGNvbnNvbGUubG9nKFwiTWFyZG93biBwb3N0cHJvY2Vzc29yOiBcIiwgd2hvbGVQYWdlLmxlbmd0aCk7XG5cdFx0Ly8gfSk7XG5cblx0XHQvLyBUaGlzIGNyZWF0ZXMgYW4gaWNvbiBpbiB0aGUgbGVmdCByaWJib24uXG5cdFx0Y29uc3QgcmliYm9uSWNvbkVsID0gdGhpcy5hZGRSaWJib25JY29uKCdkaWNlJywgJ0EuSi4gUGx1Z2luJywgKGV2dDogTW91c2VFdmVudCkgPT4ge1xuXHRcdFx0Ly8gQ2FsbGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBpY29uLlxuXHRcdFx0Ly8gbmV3IE5vdGljZSgnVGhpcyBpcyBhIG5vdGljZSEnKTtcblx0XHRcdFxuXHRcdFx0Ly8gQWFyb246IFtbMjAyMi0wNy0wNSBUdWVdXVxuXHRcdFx0Ly8gPGRpdiBjbGFzcz1cIndvcmtzcGFjZVwiPiBpcyB0aGUgaGlnaGVzdCBsZXZlbCBpbiB0aGUgaHRtbCBvbmUgY2FuIGFjY2VzcyBpbiBhIHBsdWdpbi5cblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuYXBwLndvcmtzcGFjZS5yb290U3BsaXQpXG5cdFx0XHR0aGlzLmFwcC53b3Jrc3BhY2UuaXRlcmF0ZUFsbExlYXZlcygobGVhZikgPT4geyBcblx0XHRcdFx0aWYgKGxlYWYuZ2V0Vmlld1N0YXRlKCkudHlwZSA9PSAnbWFya2Rvd24nKXtcblx0XHRcdFx0XHRsZXQgbGVhZkNvbnRhaW5lciA9IGxlYWYudmlldy5jb250YWluZXJFbDtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRsZXQgdGl0bGUgPSBsZWFmQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi52aWV3LWhlYWRlci10aXRsZScpPy50ZXh0Q29udGVudFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGxldCBjb250ZW50ID0gbGVhZkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdkaXYudmlldy1jb250ZW50Jylcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyBjb25zdCBiZWdpbiA9ICc8IURPQ1RZUEUgaHRtbD4gPGh0bWwgbGFuZz1cImVuXCIgZGlyPVwibHRyXCI+IDxoZWFkPjwvaGVhZD48Ym9keT4nXG5cdFx0XHRcdFx0Ly8gY29uc3QgZW5kID0gJzwvYm9keT48L2h0bWw+J1xuXHRcdFx0XHRcdC8vIGNvbnN0IGh0bWwgPSBiZWdpbiArIGNvbnRlbnQ/Lm91dGVySFRNTCArIGVuZDtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0Y29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5cdFx0XHRcdFx0XHRjb25zdCB7IHZhdWx0IH0gPSB0aGlzLmFwcDtcblx0XHRcdFx0XHRcdGNvbnN0IHBhdGggPSB0aGlzLnNldHRpbmdzLmh0bWxQYXRoO1xuXHRcdFx0XHRcdFx0bGV0IGZpbGUgPSB0aXRsZSEucmVwbGFjZSgnICcsICctJykgKyAnLmh0bWwnO1xuXHRcdFx0XHRcdFx0Y29uc3QgZnVsbFBhdGggPSBwYXRoICsgXCIvXCIgKyBmaWxlO1xuXHRcdFx0XHRcdFx0bGV0IGFkYXB0ZXIgPSB2YXVsdC5hZGFwdGVyO1xuXHRcdFx0XHRcdFx0Ly90aGUgcm9vdCBwYXRoIG9mIHRoaXMgdmF1bHRcblx0XHRcdFx0XHRcdGxldCB2YXVsdHBhdGggPSAnJ1xuXHRcdFx0XHRcdFx0aWYgKGFkYXB0ZXIgaW5zdGFuY2VvZiBGaWxlU3lzdGVtQWRhcHRlcikge1xuXHRcdFx0XHRcdFx0XHR2YXVsdHBhdGggPSBhZGFwdGVyLmdldEJhc2VQYXRoKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zdCBwbHVnaW5kaXIgPSB0aGlzLm1hbmlmZXN0LmRpclxuXHRcdFx0XHRcdFx0Y29uc3QgYmVnaW5GaWxlID0gdmF1bHRwYXRoICsgJy8nICsgcGx1Z2luZGlyICsgJy8nICsgJ2JlZ2luLnR4dCc7XG5cdFx0XHRcdFx0XHRjb25zdCBiZWdpbiA9IGZzLnJlYWRGaWxlU3luYyhiZWdpbkZpbGUpXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcImJlZ2luPVwiLCBiZWdpbilcblxuXHRcdFx0XHRcdFx0Y29uc3QgZW5kRmlsZSA9IHZhdWx0cGF0aCArICcvJyArIHBsdWdpbmRpciArICcvJyArICdlbmQudHh0J1xuXHRcdFx0XHRcdFx0Y29uc3QgZW5kID0gZnMucmVhZEZpbGVTeW5jKGVuZEZpbGUpO1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJlbmQ9XCIsIGVuZClcblxuXHRcdFx0XHRcdFx0Y29uc3QgaHRtbCA9IGJlZ2luICsgY29udGVudD8ub3V0ZXJIVE1MICsgZW5kO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRmcy53cml0ZUZpbGVTeW5jKGZ1bGxQYXRoLCBodG1sKVxuXHRcdFx0XHRcdFx0d2luZG93LmFsZXJ0KGBcIiR7ZmlsZX1cIiB3YXMgc2F2ZSB0byAke3BhdGh9YCk7XG5cblx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcilcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHQvLyBQZXJmb3JtIGFkZGl0aW9uYWwgdGhpbmdzIHdpdGggdGhlIHJpYmJvblxuXHRcdHJpYmJvbkljb25FbC5hZGRDbGFzcygnbXktcGx1Z2luLXJpYmJvbi1jbGFzcycpO1xuXG5cdFx0Ly8gVGhpcyBhZGRzIGEgc3RhdHVzIGJhciBpdGVtIHRvIHRoZSBib3R0b20gb2YgdGhlIGFwcC4gRG9lcyBub3Qgd29yayBvbiBtb2JpbGUgYXBwcy5cblx0XHRjb25zdCBzdGF0dXNCYXJJdGVtRWwgPSB0aGlzLmFkZFN0YXR1c0Jhckl0ZW0oKTtcblx0XHRzdGF0dXNCYXJJdGVtRWwuc2V0VGV4dCgnU3RhdHVzIEJhciBUZXh0Jyk7XG5cblx0XHQvLyBUaGlzIGFkZHMgYSBzaW1wbGUgY29tbWFuZCB0aGF0IGNhbiBiZSB0cmlnZ2VyZWQgYW55d2hlcmVcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdvcGVuLXNhbXBsZS1tb2RhbC1zaW1wbGUnLFxuXHRcdFx0bmFtZTogJ09wZW4gc2FtcGxlIG1vZGFsIChzaW1wbGUpJyxcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XG5cdFx0XHRcdG5ldyBTYW1wbGVNb2RhbCh0aGlzLmFwcCkub3BlbigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vIFRoaXMgYWRkcyBhbiBlZGl0b3IgY29tbWFuZCB0aGF0IGNhbiBwZXJmb3JtIHNvbWUgb3BlcmF0aW9uIG9uIHRoZSBjdXJyZW50IGVkaXRvciBpbnN0YW5jZVxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XG5cdFx0XHRpZDogJ3NhbXBsZS1lZGl0b3ItY29tbWFuZCcsXG5cdFx0XHRuYW1lOiAnU2FtcGxlIGVkaXRvciBjb21tYW5kJyxcblx0XHRcdGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IsIHZpZXc6IE1hcmtkb3duVmlldykgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlZGl0b3IuZ2V0U2VsZWN0aW9uKCkpO1xuXHRcdFx0XHRlZGl0b3IucmVwbGFjZVNlbGVjdGlvbignU2FtcGxlIEVkaXRvciBDb21tYW5kJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly8gVGhpcyBhZGRzIGEgY29tcGxleCBjb21tYW5kIHRoYXQgY2FuIGNoZWNrIHdoZXRoZXIgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGFwcCBhbGxvd3MgZXhlY3V0aW9uIG9mIHRoZSBjb21tYW5kXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAnb3Blbi1zYW1wbGUtbW9kYWwtY29tcGxleCcsXG5cdFx0XHRuYW1lOiAnT3BlbiBzYW1wbGUgbW9kYWwgKGNvbXBsZXgpJyxcblx0XHRcdGNoZWNrQ2FsbGJhY2s6IChjaGVja2luZzogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHQvLyBDb25kaXRpb25zIHRvIGNoZWNrXG5cdFx0XHRcdGNvbnN0IG1hcmtkb3duVmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XG5cdFx0XHRcdGlmIChtYXJrZG93blZpZXcpIHtcblx0XHRcdFx0XHQvLyBJZiBjaGVja2luZyBpcyB0cnVlLCB3ZSdyZSBzaW1wbHkgXCJjaGVja2luZ1wiIGlmIHRoZSBjb21tYW5kIGNhbiBiZSBydW4uXG5cdFx0XHRcdFx0Ly8gSWYgY2hlY2tpbmcgaXMgZmFsc2UsIHRoZW4gd2Ugd2FudCB0byBhY3R1YWxseSBwZXJmb3JtIHRoZSBvcGVyYXRpb24uXG5cdFx0XHRcdFx0aWYgKCFjaGVja2luZykge1xuXHRcdFx0XHRcdFx0bmV3IFNhbXBsZU1vZGFsKHRoaXMuYXBwKS5vcGVuKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gVGhpcyBjb21tYW5kIHdpbGwgb25seSBzaG93IHVwIGluIENvbW1hbmQgUGFsZXR0ZSB3aGVuIHRoZSBjaGVjayBmdW5jdGlvbiByZXR1cm5zIHRydWVcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gVGhpcyBhZGRzIGEgc2V0dGluZ3MgdGFiIHNvIHRoZSB1c2VyIGNhbiBjb25maWd1cmUgdmFyaW91cyBhc3BlY3RzIG9mIHRoZSBwbHVnaW5cblx0XHR0aGlzLmFkZFNldHRpbmdUYWIobmV3IFNhbXBsZVNldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcblxuXHRcdC8vIElmIHRoZSBwbHVnaW4gaG9va3MgdXAgYW55IGdsb2JhbCBET00gZXZlbnRzIChvbiBwYXJ0cyBvZiB0aGUgYXBwIHRoYXQgZG9lc24ndCBiZWxvbmcgdG8gdGhpcyBwbHVnaW4pXG5cdFx0Ly8gVXNpbmcgdGhpcyBmdW5jdGlvbiB3aWxsIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lciB3aGVuIHRoaXMgcGx1Z2luIGlzIGRpc2FibGVkLlxuXHRcdHRoaXMucmVnaXN0ZXJEb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJywgKGV2dDogTW91c2VFdmVudCkgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2NsaWNrJywgZXZ0KTtcblx0XHR9KTtcblxuXHRcdC8vIFdoZW4gcmVnaXN0ZXJpbmcgaW50ZXJ2YWxzLCB0aGlzIGZ1bmN0aW9uIHdpbGwgYXV0b21hdGljYWxseSBjbGVhciB0aGUgaW50ZXJ2YWwgd2hlbiB0aGUgcGx1Z2luIGlzIGRpc2FibGVkLlxuXHRcdHRoaXMucmVnaXN0ZXJJbnRlcnZhbCh3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4gY29uc29sZS5sb2coJ3NldEludGVydmFsJyksIDUgKiA2MCAqIDEwMDApKTtcblx0fVxuXG5cdG9udW5sb2FkKCkge1xuXG5cdH1cblxuXHRhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG5cdFx0dGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSk7XG5cdH1cblxuXHRhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG5cdFx0YXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcblx0fVxufVxuXG5jbGFzcyBTYW1wbGVNb2RhbCBleHRlbmRzIE1vZGFsIHtcblx0Y29uc3RydWN0b3IoYXBwOiBBcHApIHtcblx0XHRzdXBlcihhcHApO1xuXHR9XG5cblx0b25PcGVuKCkge1xuXHRcdGNvbnN0IHtjb250ZW50RWx9ID0gdGhpcztcblx0XHRjb250ZW50RWwuc2V0VGV4dCgnV29haCEnKTtcblx0fVxuXG5cdG9uQ2xvc2UoKSB7XG5cdFx0Y29uc3Qge2NvbnRlbnRFbH0gPSB0aGlzO1xuXHRcdGNvbnRlbnRFbC5lbXB0eSgpO1xuXHR9XG59XG5cbmNsYXNzIFNhbXBsZVNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcblx0cGx1Z2luOiBNeVBsdWdpbjtcblxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBNeVBsdWdpbikge1xuXHRcdHN1cGVyKGFwcCwgcGx1Z2luKTtcblx0XHR0aGlzLnBsdWdpbiA9IHBsdWdpbjtcblx0fVxuXG5cdGRpc3BsYXkoKTogdm9pZCB7XG5cdFx0Y29uc3Qge2NvbnRhaW5lckVsfSA9IHRoaXM7XG5cblx0XHRjb250YWluZXJFbC5lbXB0eSgpO1xuXG5cdFx0Y29udGFpbmVyRWwuY3JlYXRlRWwoJ2gyJywge3RleHQ6ICdTZXR0aW5ncyBmb3IgXCJTYXZlIG5vdGUgYXMgaHRtbFwiIHBsdWdpbi4nfSk7XG5cblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcblx0XHRcdC5zZXROYW1lKCdUYXJnZXQgUGF0aDonKVxuXHRcdFx0LnNldERlc2MoJ1doZXJlIGRvIHlvdSB3YW50IHRvIHNhdmUgdGhlIGh0bWwgZmlsZT8nKVxuXHRcdFx0LmFkZFRleHQodGV4dCA9PiB0ZXh0XG5cdFx0XHRcdC5zZXRQbGFjZWhvbGRlcignRW50ZXIgYSBhYnNvbHV0ZSBwYXRoJylcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmh0bWxQYXRoKVxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1NlY3JldDogJyArIHZhbHVlKTtcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5odG1sUGF0aCA9IHZhbHVlO1xuXHRcdFx0XHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXHRcdFx0XHR9KSk7XG5cdH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUE4SDtBQVM5SCxJQUFNLG1CQUFxQztBQUFBLEVBQzFDLFdBQVc7QUFBQSxFQUNYLFVBQVU7QUFDWDtBQUVBLElBQXFCLFdBQXJCLGNBQXNDLHVCQUFPO0FBQUEsRUFHNUMsQUFBTSxTQUFTO0FBQUE7QUFDZCxZQUFNLEtBQUssYUFBYTtBQVN4QixZQUFNLGVBQWUsS0FBSyxjQUFjLFFBQVEsZUFBZSxDQUFDLFFBQW9CO0FBT25GLGFBQUssSUFBSSxVQUFVLGlCQUFpQixDQUFDLFNBQVM7QUFsQ2pEO0FBbUNJLGNBQUksS0FBSyxhQUFhLEVBQUUsUUFBUSxZQUFXO0FBQzFDLGdCQUFJLGdCQUFnQixLQUFLLEtBQUs7QUFFOUIsZ0JBQUksUUFBUSxvQkFBYyxjQUFjLHVCQUF1QixNQUFuRCxtQkFBc0Q7QUFFbEUsZ0JBQUksVUFBVSxjQUFjLGNBQWMsa0JBQWtCO0FBSzVELGdCQUFJO0FBQ0gsb0JBQU0sS0FBSyxRQUFRO0FBRW5CLG9CQUFNLEVBQUUsVUFBVSxLQUFLO0FBQ3ZCLG9CQUFNLE9BQU8sS0FBSyxTQUFTO0FBQzNCLGtCQUFJLE9BQU8sTUFBTyxRQUFRLEtBQUssR0FBRyxJQUFJO0FBQ3RDLG9CQUFNLFdBQVcsT0FBTyxNQUFNO0FBQzlCLGtCQUFJLFVBQVUsTUFBTTtBQUVwQixrQkFBSSxZQUFZO0FBQ2hCLGtCQUFJLG1CQUFtQixtQ0FBbUI7QUFDekMsNEJBQVksUUFBUSxZQUFZO0FBQUEsY0FDakM7QUFDQSxvQkFBTSxZQUFZLEtBQUssU0FBUztBQUNoQyxvQkFBTSxZQUFZLFlBQVksTUFBTSxZQUFZO0FBQ2hELG9CQUFNLFFBQVEsR0FBRyxhQUFhLFNBQVM7QUFHdkMsb0JBQU0sVUFBVSxZQUFZLE1BQU0sWUFBWTtBQUM5QyxvQkFBTSxNQUFNLEdBQUcsYUFBYSxPQUFPO0FBR25DLG9CQUFNLE9BQU8sUUFBUSxvQ0FBUyxhQUFZO0FBRTFDLGlCQUFHLGNBQWMsVUFBVSxJQUFJO0FBQy9CLHFCQUFPLE1BQU0sSUFBSSxxQkFBcUIsTUFBTTtBQUFBLFlBRTdDLFNBQVMsT0FBUDtBQUNELHNCQUFRLE1BQU0sS0FBSztBQUFBLFlBQ3BCO0FBQUEsVUFDRDtBQUFBLFFBRUQsQ0FBQztBQUFBLE1BQ0YsQ0FBQztBQUVELG1CQUFhLFNBQVMsd0JBQXdCO0FBRzlDLFlBQU0sa0JBQWtCLEtBQUssaUJBQWlCO0FBQzlDLHNCQUFnQixRQUFRLGlCQUFpQjtBQUd6QyxXQUFLLFdBQVc7QUFBQSxRQUNmLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLFVBQVUsTUFBTTtBQUNmLGNBQUksWUFBWSxLQUFLLEdBQUcsRUFBRSxLQUFLO0FBQUEsUUFDaEM7QUFBQSxNQUNELENBQUM7QUFFRCxXQUFLLFdBQVc7QUFBQSxRQUNmLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLGdCQUFnQixDQUFDLFFBQWdCLFNBQXVCO0FBQ3ZELGtCQUFRLElBQUksT0FBTyxhQUFhLENBQUM7QUFDakMsaUJBQU8saUJBQWlCLHVCQUF1QjtBQUFBLFFBQ2hEO0FBQUEsTUFDRCxDQUFDO0FBRUQsV0FBSyxXQUFXO0FBQUEsUUFDZixJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixlQUFlLENBQUMsYUFBc0I7QUFFckMsZ0JBQU0sZUFBZSxLQUFLLElBQUksVUFBVSxvQkFBb0IsNEJBQVk7QUFDeEUsY0FBSSxjQUFjO0FBR2pCLGdCQUFJLENBQUMsVUFBVTtBQUNkLGtCQUFJLFlBQVksS0FBSyxHQUFHLEVBQUUsS0FBSztBQUFBLFlBQ2hDO0FBR0EsbUJBQU87QUFBQSxVQUNSO0FBQUEsUUFDRDtBQUFBLE1BQ0QsQ0FBQztBQUdELFdBQUssY0FBYyxJQUFJLGlCQUFpQixLQUFLLEtBQUssSUFBSSxDQUFDO0FBSXZELFdBQUssaUJBQWlCLFVBQVUsU0FBUyxDQUFDLFFBQW9CO0FBQUEsTUFFOUQsQ0FBQztBQUdELFdBQUssaUJBQWlCLE9BQU8sWUFBWSxNQUFNLFFBQVEsSUFBSSxhQUFhLEdBQUcsSUFBSSxLQUFLLEdBQUksQ0FBQztBQUFBLElBQzFGO0FBQUE7QUFBQSxFQUVBLFdBQVc7QUFBQSxFQUVYO0FBQUEsRUFFQSxBQUFNLGVBQWU7QUFBQTtBQUNwQixXQUFLLFdBQVcsT0FBTyxPQUFPLENBQUMsR0FBRyxrQkFBa0IsTUFBTSxLQUFLLFNBQVMsQ0FBQztBQUFBLElBQzFFO0FBQUE7QUFBQSxFQUVBLEFBQU0sZUFBZTtBQUFBO0FBQ3BCLFlBQU0sS0FBSyxTQUFTLEtBQUssUUFBUTtBQUFBLElBQ2xDO0FBQUE7QUFDRDtBQUVBLElBQU0sY0FBTixjQUEwQixzQkFBTTtBQUFBLEVBQy9CLFlBQVksS0FBVTtBQUNyQixVQUFNLEdBQUc7QUFBQSxFQUNWO0FBQUEsRUFFQSxTQUFTO0FBQ1IsVUFBTSxFQUFDLGNBQWE7QUFDcEIsY0FBVSxRQUFRLE9BQU87QUFBQSxFQUMxQjtBQUFBLEVBRUEsVUFBVTtBQUNULFVBQU0sRUFBQyxjQUFhO0FBQ3BCLGNBQVUsTUFBTTtBQUFBLEVBQ2pCO0FBQ0Q7QUFFQSxJQUFNLG1CQUFOLGNBQStCLGlDQUFpQjtBQUFBLEVBRy9DLFlBQVksS0FBVSxRQUFrQjtBQUN2QyxVQUFNLEtBQUssTUFBTTtBQUNqQixTQUFLLFNBQVM7QUFBQSxFQUNmO0FBQUEsRUFFQSxVQUFnQjtBQUNmLFVBQU0sRUFBQyxnQkFBZTtBQUV0QixnQkFBWSxNQUFNO0FBRWxCLGdCQUFZLFNBQVMsTUFBTSxFQUFDLE1BQU0sMkNBQTBDLENBQUM7QUFFN0UsUUFBSSx3QkFBUSxXQUFXLEVBQ3JCLFFBQVEsY0FBYyxFQUN0QixRQUFRLDBDQUEwQyxFQUNsRCxRQUFRLFVBQVEsS0FDZixlQUFlLHVCQUF1QixFQUN0QyxTQUFTLEtBQUssT0FBTyxTQUFTLFFBQVEsRUFDdEMsU0FBUyxDQUFPLFVBQVU7QUFDMUIsY0FBUSxJQUFJLGFBQWEsS0FBSztBQUM5QixXQUFLLE9BQU8sU0FBUyxXQUFXO0FBQ2hDLFlBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxJQUNoQyxFQUFDLENBQUM7QUFBQSxFQUNMO0FBQ0Q7IiwKICAibmFtZXMiOiBbXQp9Cg==