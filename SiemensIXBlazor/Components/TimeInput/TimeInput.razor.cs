using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using SiemensIXBlazor.Interops;
using System.Text.Json;

namespace SiemensIXBlazor.Components.TimeInput
{
    public partial class TimeInput
    {
        private BaseInterop? _interop;

        [Parameter]
        public int HourInterval { get; set; } = 1;

        [Parameter]
        public string I18nErrorTimeUnparsable { get; set; } = "Time is not valid";

        [Parameter]
        public string I18nHourColumnHeader { get; set; } = "hr";

        [Parameter]
        public string I18nMillisecondColumnHeader { get; set; } = "ms";

        [Parameter]
        public string I18nMinuteColumnHeader { get; set; } = "min";

        [Parameter]
        public string I18nSecondColumnHeader { get; set; } = "sec";

        [Parameter]
        public string I18nSelectTime { get; set; } = "Confirm";

        [Parameter]
        public string I18nTime { get; set; } = "Time";

        [Parameter]
        public int MillisecondInterval { get; set; } = 100;

        [Parameter]
        public int MinuteInterval { get; set; } = 1;

        [Parameter]
        public int SecondInterval { get; set; } = 1;

        [Parameter, EditorRequired]
        public string Id { get; set; } = string.Empty;

        [Parameter]
        public bool Disabled { get; set; } = false;

        [Parameter]
        public bool EnableTopLayer { get; set; } = false;

        [Parameter]
        public string Format { get; set; } = "TT";

        [Parameter]
        public string? HelperText { get; set; }

        [Parameter]
        public string? InfoText { get; set; }

        [Parameter]
        public string? InvalidText { get; set; }

        [Parameter]
        public string? Label { get; set; }

        [Parameter]
        public string? Name { get; set; }

        [Parameter]
        public string? Placeholder { get; set; }

        [Parameter]
        public bool Readonly { get; set; } = false;

        [Parameter]
        public bool? Required { get; set; }

        [Parameter]
        public bool? ShowTextAsTooltip { get; set; }

        [Parameter]
        public string? ValidText { get; set; }

        [Parameter]
        public string Value { get; set; } = "";

        [Parameter]
        public string? WarningText { get; set; }

        [Parameter]
        public RenderFragment? StartSlot { get; set; }

        [Parameter]
        public RenderFragment? EndSlot { get; set; }

        [Parameter]
        public EventCallback<string> ValueChangeEvent { get; set; }

        [Parameter]
        public EventCallback<JsonElement> ValidityStateChangeEvent { get; set; }

        protected override void OnAfterRender(bool firstRender)
        {
            if (firstRender)
            {
                _interop = new(JSRuntime);

                Task.Run(async () =>
                {
                    await _interop.AddEventListener(this, Id, "valueChange", "ValueChange");
                    await _interop.AddEventListener(this, Id, "validityStateChange", "ValidityStateChange");
                });
            }
        }

        [JSInvokable]
        public async void ValueChange(JsonElement valueState)
        {
            string newValue = valueState.GetString() ?? "";
            Value = newValue;
            await ValueChangeEvent.InvokeAsync(newValue);
            StateHasChanged();
        }

        [JSInvokable]
        public async void ValidityStateChange(JsonElement validityState)
        {
            await ValidityStateChangeEvent.InvokeAsync(validityState);
        }
    }
}
