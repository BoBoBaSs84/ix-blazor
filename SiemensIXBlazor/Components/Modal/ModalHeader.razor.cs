// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2024 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------

using Microsoft.AspNetCore.Components;

namespace SiemensIXBlazor.Components.Modal
{
    /// <summary>
    /// Blazor wrapper for ix-modal-header web component
    /// Provides header section for modal dialogs with icon support
    /// </summary>
    public partial class ModalHeader : IXBaseComponent
    {
        [Parameter]
        public RenderFragment? ChildContent { get; set; }

        [Parameter, EditorRequired]
        public string Id { get; set; } = string.Empty;

        /// <summary>
        /// Icon to display in the modal header
        /// </summary>
        [Parameter]
        public string? Icon { get; set; }
    }
}
