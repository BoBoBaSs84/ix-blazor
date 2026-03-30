// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2024 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------

using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using SiemensIXBlazor.Interops;

namespace SiemensIXBlazor.Components.Modal
{
    /// <summary>
    /// Blazor wrapper for ix-modal web component
    /// Provides modal dialog functionality with backdrop, keyboard support, and animations
    /// </summary>
    public partial class Modal : IXBaseComponent, IAsyncDisposable
    {
        [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

        [Parameter]
        public RenderFragment? ChildContent { get; set; }

        [Parameter, EditorRequired]
        public string Id { get; set; } = string.Empty;

        /// <summary>
        /// Animation type for modal show/hide. Default: true
        /// </summary>
        [Parameter]
        public bool Animation { get; set; } = true;

        /// <summary>
        /// ARIA label referenced by this modal
        /// </summary>
        [Parameter]
        public string? AriaLabelledBy { get; set; }

        /// <summary>
        /// ARIA description referenced by this modal
        /// </summary>
        [Parameter]
        public string? AriaDescribedBy { get; set; }

        /// <summary>
        /// Whether clicking on backdrop closes the modal. Default: true
        /// </summary>
        [Parameter]
        public bool BackdropClickClose { get; set; } = true;

        /// <summary>
        /// Function called before modal is dismissed
        /// </summary>
        [Parameter]
        public string? BeforeDismiss { get; set; }

        /// <summary>
        /// Whether modal should be vertically centered. Default: false
        /// </summary>
        [Parameter]
        public bool Centered { get; set; } = false;

        /// <summary>
        /// Whether ESC key closes the modal. Default: true
        /// </summary>
        [Parameter]
        public bool CloseOnEscape { get; set; } = true;

        /// <summary>
        /// Container element for the modal
        /// </summary>
        [Parameter]
        public string? Container { get; set; }

        /// <summary>
        /// Whether keyboard navigation is enabled. Default: true
        /// </summary>
        [Parameter]
        public bool Keyboard { get; set; } = true;

        /// <summary>
        /// Size of the modal. Options: 'sm', 'lg', 'xl', 'fullscreen'
        /// </summary>
        [Parameter]
        public string? Size { get; set; }

        /// <summary>
        /// Event fired when modal is dismissed
        /// </summary>
        [Parameter]
        public EventCallback DismissedEvent { get; set; }

        /// <summary>
        /// Event fired when modal is shown
        /// </summary>
        [Parameter]
        public EventCallback ShownEvent { get; set; }

        private BaseInterop _interop = default!;

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                _interop = new BaseInterop(JSRuntime);
                
                await _interop.AddEventListener(this, Id, "dismissed", "Dismissed");
                await _interop.AddEventListener(this, Id, "shown", "Shown");
            }
        }

        /// <summary>
        /// Shows the modal
        /// </summary>
        public async Task ShowAsync()
        {
            await JSRuntime.InvokeVoidAsync("siemensIXInterop.modal.show", Id);
        }

        /// <summary>
        /// Hides the modal
        /// </summary>
        public async Task HideAsync()
        {
            await JSRuntime.InvokeVoidAsync("siemensIXInterop.modal.hide", Id);
        }

        /// <summary>
        /// Toggles the modal visibility
        /// </summary>
        public async Task ToggleAsync()
        {
            await JSRuntime.InvokeVoidAsync("siemensIXInterop.modal.toggle", Id);
        }

        [JSInvokable]
        public async Task Dismissed()
        {
            await DismissedEvent.InvokeAsync();
        }

        [JSInvokable]
        public async Task Shown()
        {
            await ShownEvent.InvokeAsync();
        }

        /// <summary>
        /// Dispose method to clean up JavaScript interop resources
        /// </summary>
        public async ValueTask DisposeAsync()
        {
            if (_interop != null)
            {
                await _interop.DisposeAsync();
            }
        }
    }
}
